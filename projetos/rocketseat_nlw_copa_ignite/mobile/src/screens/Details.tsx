import { HStack, useToast, VStack } from "native-base";
import { Share } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { api } from "../services/api";
import { PoolPros } from "../components/PoolCard";
import { PoolHeader } from "../components/PoolHeader";
import { EmptyMyPoolList } from "../components/EmptyMyPoolList";
import { Option } from "../components/Option";
import { Guesses } from "../components/Guesses";

interface RouteParams {
    id: string;
}

export function Details() {

    const route = useRoute();
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(true);
    const [poolDetails, setPoolDetails] = useState<PoolPros|undefined>(undefined);
    const [optionSelected, setOptionSelected] = useState<'guasses'|'ranking'>('guasses');

    const { id } = route.params as RouteParams;

    useEffect(() => {
        fetchPoolDetails();
    }, [id]);

    if (isLoading) return <Loading />;

    return (
        <VStack flex={1} bgColor='gray.900'>
            <Header
                title={poolDetails?.title}
                showBackButton showShareButton
                onShare={handleCodeShare}
            />
            {poolDetails && poolDetails._count?.participants > 0 ?
                <VStack px={5} flex={1}>
                    <PoolHeader data={poolDetails} />
                    <HStack bgColor='gray.800' p={1} rounded='sm' mb={5}>
                        <Option
                            title="Seus palpites"
                            isSelected={optionSelected === 'guasses'}
                            onPress={() => setOptionSelected('guasses')}
                        />
                        <Option
                            title="Ranking do grupo"
                            isSelected={optionSelected === 'ranking'}
                            onPress={() => setOptionSelected('ranking')}
                        />
                    </HStack>
                    <Guesses poolId={poolDetails.id} code={poolDetails.code} />
                </VStack>
            :
                <EmptyMyPoolList code={poolDetails.code} />
            }
        </VStack>
    );

    async function fetchPoolDetails() {
        try {
            setIsLoading(true);
            const response = await api.get(`/pools/${id}`);
            setPoolDetails(response.data.pool);
        } catch (error) {
            console.log(error);
            toast.show({
                title: 'Não foi possível carregar os detalhes do bolão',
                placement: 'top',
                bgColor: 'red.500'
            });
        } finally {
            setIsLoading(false);
        }
    }

    async function handleCodeShare() {
        await Share.share({
            message: poolDetails.code
        });
    }
}