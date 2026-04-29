import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 
import Constants from 'expo-constants';

import Login from './src/telas/login';
import CadastroUsuario from './src/telas/cadastroUsuario'; 
import EsqueceuSenha from './src/telas/esqueceuSenha'; 
import Home from './src/telas/home'; 
import PerfilUsuario from './src/telas/perfilUsuario'; // Vai ser cadastro usuário com update - ajustar um componente para ele
import Produto from './src/telas/produto';
import Produtos from './src/telas/produtos'; 
import Carrinho from './src/telas/carrinho'; 
import Pedidos from './src/telas/pedidos'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Pedidos />
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
    paddingTop: Constants.statusBarHeight,
  },
});
