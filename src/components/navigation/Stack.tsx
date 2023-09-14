import { createStackNavigator } from '@react-navigation/stack';
import Prelogin from '../Prelogin/Prelogin';
import CargaInicial from '../Prelogin/CargaInicial';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName='Prelogin'
    >
      <Stack.Screen name="Prelogin" component={Prelogin} options={{headerShown: false}} />
      <Stack.Screen name="Principal" component={BottomTab} />
    </Stack.Navigator>
  );
}

export default MenuStack