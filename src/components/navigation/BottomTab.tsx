import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CargaInicial from '../Prelogin/CargaInicial';
import Prelogin from '../Prelogin/Prelogin';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Carga inicial" component={CargaInicial}/>
        <Tab.Screen name="Prelogin" component={Prelogin}/>
    </Tab.Navigator>
  )
}

export default BottomTab