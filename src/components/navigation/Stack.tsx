import { createStackNavigator } from '@react-navigation/stack';
import Prelogin from '../Prelogin/Prelogin';
import CargaInicial from '../Prelogin/CargaInicial';
import BottomTab from './BottomTab';
import Login from '../Login/Login';

const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName='Prelogin'
    >
      <Stack.Screen name="Prelogin" component={Prelogin} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default MenuStack