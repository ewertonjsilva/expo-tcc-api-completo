/**
 * @file   src\routes\tabHome.js
 * @author Ewerton
 * @date   2026-04-30
 * @desc   [Descrição do script ou função]
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../telas/home'; 
import Pedidos from '../telas/pedidos'; 
import Carrinho from '../telas/carrinho';
import PerfilUsuario from '../telas/perfilUsuario';

const Tab = createBottomTabNavigator();

function TabHome() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pedidos" component={Pedidos} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
      <Tab.Screen name="PerfilUsuario" component={PerfilUsuario} />
    </Tab.Navigator>
  );
}

export default TabHome;