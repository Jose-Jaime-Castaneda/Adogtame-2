import { createStackNavigator } from '@react-navigation/stack';
import Prelogin from '../Prelogin/Prelogin';
import CargaInicial from '../Prelogin/CargaInicial';
import BottomTab from './BottomTab';
import Login from '../Login/Login';
import Personales from '../CrearCuenta/Personales';
import Contacto from '../CrearCuenta/Contacto';
import Home from '../Home/Home';
import EditarCuenta from '../EditarCuenta/EditarCuenta';

const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Prelogin'
    >
      <Stack.Screen name='NavTab' component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="Prelogin" component={Prelogin} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Personales" component={Personales} options={{ headerShown: false }} />
      <Stack.Screen name="Contacto" component={Contacto} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='EditarCuenta' component={EditarCuenta} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default MenuStack