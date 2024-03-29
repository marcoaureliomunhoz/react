import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Heading, useToast, VStack } from "native-base";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import { api } from "../services/api";

export function Find() {

    const toast = useToast();
    const {navigate} = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [code, setCode] = useState('');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <VStack flex={1} bgColor='gray.900'>
                <Header title='Buscar por código' showBackButton />
                <VStack mt={8} mx={5} alignItems='center'>
                    <Heading fontFamily='heading' color='white' fontSize='xl' mb={8} textAlign='center'>
                        Encontre um bolão através de{'\n'}seu código único
                    </Heading>

                    <Input
                        mb={2}
                        placeholder='Qual o código do bolão?'
                        onChangeText={setCode}
                        autoCapitalize='characters'
                    />

                    <Button
                        title='BUSCAR BOLÃO'
                        isLoading={isLoading}
                        onPress={handleJoinPool}
                    />
                </VStack>
            </VStack>
        </TouchableWithoutFeedback>
    );

    async function handleJoinPool() {
        try {
            if (!code.trim()) {
                return toast.show({
                    title: 'Informe o código',
                    placement: 'top',
                    bgColor: 'red.500'
                });
            }

            setIsLoading(true);
            await api.post('/pools/join', { code });

            return toast.show({
                title: 'Você entrou no bolão com sucesso',
                placement: 'top',
                bgColor: 'green.500'
            });

            navigate('pools');
        } catch (error) {
            console.log(error.message);

            setIsLoading(false);

            if (error.response?.data?.message.trim() === 'Pool not found.') {
                return toast.show({
                    title: 'Botão não encontrado',
                    placement: 'top',
                    bgColor: 'red.500'
                });
            }

            if (error.response?.data?.message.trim() === 'You already joined this pool.') {
                return toast.show({
                    title: 'Você já está neste bolão',
                    placement: 'top',
                    bgColor: 'red.500'
                });
            }

            toast.show({
                title: 'Não foi possível encontrar o bolão',
                placement: 'top',
                bgColor: 'red.500'
            });
        }
    }
}