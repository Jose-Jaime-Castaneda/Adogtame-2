import { View, Text } from 'react-native'
import React from 'react'
import CargaInicial from '../Prelogin/CargaInicial';
import Prelogin from '../Prelogin/Prelogin';
import Home from '../Home/Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const BottomTab = (): JSX.Element => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Prelogin" component={Prelogin} />
      <Tab.Screen name="CargaInicial" component={CargaInicial} />
    </Tab.Navigator>
  );
}

export default BottomTab