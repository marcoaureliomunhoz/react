import { FastifyInstance } from "fastify";
import { object, z } from "zod";
import { prisma } from "../lib/prisma";
import { authenticate } from "../plugins/authenticate";

export async function guessRoutes(fastify: FastifyInstance) {

    fastify.get('/guesses/count', async () => {

        const count = await prisma.guess.count();

        return {
            count: count
        }
    });

    fastify.post('/pools/:poolId/games/:gameId/guesses', {onRequest: [authenticate]}, async (request, reply) => {
        console.log('*********** guesses ***********');

        const createPoolBody = z.object({
            poolId: z.string(),
            gameId: z.string(),
        });

        const createGuessBody = z.object({
            firstTeamPoints: z.number(),
            secondTeamPoints: z.number(),
        });

        const { poolId, gameId } = createPoolBody.parse(request.params);
        const { firstTeamPoints, secondTeamPoints } = createGuessBody.parse(request.body);

        console.log('**** request.params:', request.params);
        console.log('**** request.body:', request.body);

        const participant = await prisma.participant.findUnique({
            where: {
                userId_poolId: {
                    poolId,
                    userId: request.user.sub
                }
            }
        });

        console.log('**** participant:', participant);

        if (!participant) {
            return reply.status(400).send({
                message: `You're not allowed to create a guess inside this pool.`
            });
        }

        const guess = await prisma.guess.findUnique({
            where: {
                participantId_gameId: {
                    participantId: participant.id,
                    gameId
                }
            }
        });

        console.log('**** guess:', guess);

        if (guess) {
            return reply.status(400).send({
                message: `You already sent a guess to this game on this pool.`
            });
        }

        const game = await prisma.game.findUnique({
            where: {
                id: gameId
            }
        });

        console.log('**** game:', game);

        if (!game) {
            return reply.status(400).send({
                message: `Game not found.`
            });
        }

        if (game.date < new Date()) {
            return reply.status(400).send({
                message: `You cannot send guesses after the game date.`
            });
        }

        console.log('**** guess create.....');

        await prisma.guess.create({
            data: {
                gameId,
                participantId: participant.id,
                firstTeamPoints,
                secondTeamPoints
            }
        });

        return reply.status(201).send();
    });
}