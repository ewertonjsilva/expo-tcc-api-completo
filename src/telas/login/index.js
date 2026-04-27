import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import Logo from '../../componentes/logo';

import styles from './styles';

// export default function Login({ navigation }) {
export default function Login() {

    // const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const usuTemp = {
        id: 101,
        nome: 'Jorilson da Silva',
        email: 'jori@email.com',
        senha: '123',
        tipo: 'cliente'
    }

    function Acesso() {
        if (usuTemp.email === email && usuTemp.senha === senha) {
            // navigation.navigate('Home', {usuTemp});
            Alert.alert('Sucesso', 'Login realizado com sucesso!',
                [{ text: 'Ok', onPress: () => console.log('OK Pressed') }]
            );
        } else {
            Alert.alert('Erro!', 'E-mail e/ou senha inválido!',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') },]);
        }
        setEmail('');
        setSenha('');
    }

    return (
        <View style={styles.container}>
            <Logo />

            <Text style={styles.text}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder='e-mail'
                onChangeText={v => setEmail(v)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder='senha'
                onChangeText={v => setSenha(v)}
                value={senha}
            />
            <View style={styles.containerBotoes}>
                <TouchableOpacity
                    style={styles.btnCadUsu}
                // onPress={() => navigation.navigate('CadUsuario')}
                >
                    <Text style={styles.txtCadUsu}>Cadastro de usuário</Text>
                </TouchableOpacity>
                <TouchableOpacity
                // onPress={() => navigation.navigate('EsqSenha')}
                >
                    <Text style={styles.txtCadUsu}>Esqueceu senha</Text>
                </TouchableOpacity>
            </View>

                <TouchableOpacity
                    style={styles.btnEntrar}
                    onPress={() => Acesso()}
                >
                    <MaterialIcons name="vpn-key" size={24} color="#FAFAFA" />
                    {/* <Text>Acessar sistema</Text> */}
                </TouchableOpacity>

        </View>
    );
}
