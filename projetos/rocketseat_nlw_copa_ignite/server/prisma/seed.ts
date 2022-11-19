import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
    const user = await prisma.user.create({
        data: {
            name: 'Marco Munhoz',
            email: 'marcoaureliomunhoz@gmail.com',
            avatarUrl: 'https://github.com/marcoaureliomunhoz.png',
            googleId: '117557471490108869559'
        }
    });

    const pool = await prisma.pool.create({
        data: {
            title: 'Example Pool',
            code: 'BOL123',
            ownerId: user.id,
            participants: {
                create: {
                    userId: user.id
                }
            }
        }
    });

    const game1 = await prisma.game.create({
        data: {
            date: '2022-11-03T12:00:00.001Z',
            firstTeamCountryCode: 'DE',
            secondTeamCountryCode: 'BR'
        }
    });

    const game2 = await prisma.game.create({
        data: {
            date: '2022-11-04T12:00:00.001Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'AR',
            guesses: {
                create: {
                    firstTeamPoints: 2,
                    secondTeamPoints: 2,
                    participant: {
                        connect: {
                            userId_poolId: {
                                userId: user.id,
                                poolId: pool.id
                            }
                        }
                    }
                }
            }
        }
    });
}

seed();