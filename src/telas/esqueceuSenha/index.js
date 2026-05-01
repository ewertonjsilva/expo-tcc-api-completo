import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../componentes/logo';

import styles from './styles';

export default function EsqueceuSenha() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Logo />

            <Text style={styles.text}>Esqueceu Senha</Text>

            <Text style={styles.textMensagem}>Entre em contato com o Administrador do sistema no email adm@bbg.com.br</Text>

            <TouchableOpacity
                style={styles.btnVoltar}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.txtVoltar}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}
