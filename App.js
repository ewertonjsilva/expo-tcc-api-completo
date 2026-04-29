import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/telas/login';
import CadastroUsuario from './src/telas/cadastroUsuario';
import EsqueceuSenha from './src/telas/esqueceuSenha';
import Home from './src/telas/home';
import PerfilUsuario from './src/telas/perfilUsuario'; // Vai ser cadastro usuário com update - ajustar um componente para ele
import Produto from './src/telas/produto';
import Produtos from './src/telas/produtos';
import Carrinho from './src/telas/carrinho';
import Pedidos from './src/telas/pedidos';

import StackLogin from './src/routes/stackLogin';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackLogin />
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//   },
// });
