// import { useCallback } from 'react';
import { View, Text, Button, BackHandler } from 'react-native';
// import { useFocusEffect, useNavigation } from '@react-navigation/native';

// export default function Home({ route }) {
export default function Home() {

    // const navigation = useNavigation();
    // const { usuTemp } = route.params;

    // useFocusEffect(
    //     useCallback(() => {
    //         const onBackPress = () => {
    //             return true; // impede voltar
    //         };

    //         const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

    //         return () => subscription.remove();
    //     }, [])
    // );
    // console.log(usuTemp);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <Text>{`Bem vindo ${usuTemp.nome}`}</Text> */}
            <Text>Olá Nome do usuário</Text>
            <Text>Você não pode voltar com o botão físico.</Text>
            {/* <Button title="Voltar manualmente" onPress={() => navigation.goBack()} /> */}
            <Button title="Voltar manualmente" />
        </View>
    );
}