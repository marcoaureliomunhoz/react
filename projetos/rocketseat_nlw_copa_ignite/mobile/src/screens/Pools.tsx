import { useToast, VStack, FlatList } from "native-base";
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { api } from "../services/api";
import { useCallback, useState } from "react";
import {PoolCard, PoolPros} from '../components/PoolCard';
import {Loading} from '../components/Loading';
import { EmptyPoolList } from "../components/EmptyPoolList";

export function Pools() {

    const toast = useToast();
    const {navigate} = useNavigation();
    const [isLoading, setIsLoading] = useState(true);
    const [pools, setPools] = useState<PoolPros[]>([]);

    useFocusEffect(useCallback(() => {
        fetchPools();
    }, []));

    return (
        <VStack flex={1} bgColor='gray.900'>
            <Header title='Meus bolões' />
            <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor='gray.600' pb={4} mb={4}>
                <Button
                    title="BUSCAR BOLÃO POR CÓDIGO"
                    leftIconName="search"
                    sourceIcon="Octicons"
                    onPress={() => navigate('find')}
                />
            </VStack>

            {isLoading ? 
                <Loading /> 
            :
                <FlatList
                    data={pools}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <PoolCard
                            data={item}
                            onPress={() => navigate('details', { id: item.id })}
                        />
                    )}
                    ListEmptyComponent={() => <EmptyPoolList />}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ pb: 10 }}
                    px={5}
                />
            }
        </VStack>
    );

    async function fetchPools() {
        try {
            setIsLoading(true);
            const response = await api.get('/pools');
            setPools(response.data.pools);
        } catch (error) {
            console.log(error);
            toast.show({
                title: 'Não foi possível carregar os bolões',
                placement: 'top',
                bgColor: 'red.500'
            });
        } finally {
            setIsLoading(false);
        }
    }
}