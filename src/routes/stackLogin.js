import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../telas/login';
import CadastroUsuario from '../telas/cadastroUsuario';
import EsqueceuSenha from '../telas/esqueceuSenha';
import TabHome from './tabHome';

const Stack = createNativeStackNavigator();

function StackLogin() {
  return (
    <Stack.Navigator
      screenOptions={{     
        headerShown: false,
      }}
    >    
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
      <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
      <Stack.Screen name="TabHome" component={TabHome} />
    </Stack.Navigator>
  );
}

export default StackLogin;