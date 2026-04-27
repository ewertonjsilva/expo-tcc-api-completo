// import { useCallback } from 'react';
import { View, Text, Button, Image, BackHandler } from 'react-native';
// import { useFocusEffect, useNavigation } from '@react-navigation/native';

import Logo from '../../componentes/logo';
import Produtos from '../produtos';
import styles from './styles';

import img1 from '../../../assets/imgTemp/lancheBasico.jpg';
import img2 from '../../../assets/imgTemp/hamburger-bacon.jpg';
import img3 from '../../../assets/imgTemp/hamburger-batata.jpg';
import img4 from '../../../assets/imgTemp/sorvete.jpeg';
import img5 from '../../../assets/imgTemp/sucoLaranja.jpg';
import img6 from '../../../assets/imgTemp/sucoVerde.jpg';

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
        <View style={styles.container}>

            <Logo />
            {/* <Text>{`Bem vindo ${usuTemp.nome}`}</Text> */}
            <Text>Olá Nome do usuário</Text>
            <Text>Você não pode voltar com o botão físico.</Text>
            {/* <Button title="Voltar manualmente" onPress={() => navigation.goBack()} /> */}
            <Button title="Voltar manualmente" />

            <View style={styles.itensPesquisa}>
                <View style={styles.itemPesquisa}>
                    <Text style={styles.txtTituloProd}>Lanche de Frango</Text>
                    <Image style={styles.img} source={img1} />
                    <Text>15,00</Text>
                </View>
                <View style={styles.itemPesquisa}>
                    <Text style={styles.txtTituloProd}>Lanche de Peixe</Text>
                    <Image style={styles.img} source={img2} />
                    <Text>17,00</Text>
                </View>
                <View style={styles.itemPesquisa}>
                    <Text style={styles.txtTituloProd}>Bolo</Text>
                    <Image style={styles.img} source={img3} />
                    <Text>20,00</Text>
                </View>
                <View style={styles.itemPesquisa}>
                    <Text style={styles.txtTituloProd} numberOfLines={1} ellipsizeMode="tail">Fritas rústica da casa ao lado com farinha</Text>
                    <Image style={styles.img} source={img4} />
                    <Text>20,00</Text>
                </View>
            </View>

        </View>
    );
}