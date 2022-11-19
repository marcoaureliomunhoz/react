import { useToast, FlatList } from 'native-base';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { EmptyMyPoolList } from './EmptyMyPoolList';
import { Game, GameProps } from './Game';
import { Loading } from './Loading';

interface Props {
  poolId: string;
  code: string;
}

export function Guesses({ poolId, code }: Props) {

  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState<GameProps[]>([]);
  const [firstTeamPoints, setFirstTeamPoints] = useState('');
  const [secondTeamPoints, setSecondTeamPoints] = useState('');

  useEffect(() => {
    fetchGames();
  }, [poolId]);

  if (isLoading) return <Loading />;

  return (
    <FlatList
      data={games}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Game
          data={item}
          setFirstTeamPoints={setFirstTeamPoints}
          setSecondTeamPoints={setSecondTeamPoints}
          onGuessConfirm={() => handleGuessConfirm(item.id)}
        />
      )}
      ListEmptyComponent={() => <EmptyMyPoolList code={code} />}
    />
  );

  async function fetchGames() {
    try {
      setIsLoading(true);
      const response = await api.get(`/pools/${poolId}/games`);
      setGames(response.data.games);
    } catch (error) {
        console.log(error);
        toast.show({
            title: 'Não foi possível carregar os jogos',
            placement: 'top',
            bgColor: 'red.500'
        });
    } finally {
        setIsLoading(false);
    }
  }

  async function handleGuessConfirm(gameId: string) {
    try {
      if (!firstTeamPoints.trim() || !secondTeamPoints.trim()) {
        return toast.show({
          title: 'Informe o placar do palpite',
          placement: 'top',
          bgColor: 'red.500'
        });
      }

      setIsLoading(true);
      
      await api.post(`/pools/${poolId}/games/${gameId}/guesses`, {
        firstTeamPoints: Number(firstTeamPoints),
        secondTeamPoints: Number(secondTeamPoints)
      });
      
      toast.show({
        title: 'Palpite realizado com sucesso',
        placement: 'top',
        bgColor: 'green.500'
      });

      fetchGames();
    } catch (error) {
        console.log(error);

        if (error.response?.data?.message.trim() === 'You cannot send guesses after the game date.') {
          return toast.show({
              title: 'Não é possível realizar palpite quando o jogo já foi realizado',
              placement: 'top',
              bgColor: 'red.500'
          });
      }

        toast.show({
            title: 'Não foi possível enviar o palpite',
            placement: 'top',
            bgColor: 'red.500'
        });
    } finally {
        setIsLoading(false);
    }
  }
}
