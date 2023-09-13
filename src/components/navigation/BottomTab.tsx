import { View, Text } from 'react-native'
import React from 'react'
import CargaInicial from '../Prelogin/CargaInicial';
import Prelogin from '../Prelogin/Prelogin';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={CargaInicial} />
      <Tab.Screen name="Settings" component={Prelogin} />
    </Tab.Navigator>
  );
}

export default BottomTab