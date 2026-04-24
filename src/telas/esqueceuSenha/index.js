import { View, Text, TouchableOpacity } from 'react-native';

// export default function EsqSenha({ navigation }) {
export default function EsqueceuSenha() {
    return (
        <View>
            <Text>Esqueceu Senha</Text>
            <TouchableOpacity
                // onPress={() => navigation.goBack()}
            >
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}
