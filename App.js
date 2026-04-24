import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/telas/login';
import Home from './src/telas/home'; 
import EsqueceuSenha from './src/telas/esqueceuSenha'; 
import CadastroUsuario from './src/telas/cadastroUsuario'; 
import Carrinho from './src/telas/carrinho'; 
import PerfilUsuario from './src/telas/perfilUsuario'; 
import Produtos from './src/telas/produtos'; 
import Pedidos from './src/telas/pedidos'; 
import EnderecoUsuario from './src/telas/enderecoUsuario'; 
import Produto from './src/telas/produto';

export default function App() {
  return (
    <View style={styles.container}>
      <Produtos />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
