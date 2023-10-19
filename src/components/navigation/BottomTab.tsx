import { Image } from 'react-native'
import React from 'react'
import Home from '../Home/Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Buscar from '../Buscar/Buscar';
import Publicar from '../Publicar/Publicar';
import Mensajes from '../Mensajes/Mensajes';
import Cuenta from '../Cuenta/Cuenta';

const Tab = createMaterialBottomTabNavigator();

const BottomTab = (): JSX.Element => {
  return (
    <Tab.Navigator
      initialRouteName='Inicio'
      barStyle={{ backgroundColor: "#6a8faf" }}
      activeColor='#f2f2f2'
      inactiveColor='#000'
    >
      <Tab.Screen name="Inicio" component={Home} options={{
        tabBarIcon: () => (
          <Image
            source={require('./../../../assets/Icons/home_black_36dp.png')}
            style={{ width: 25, height: 25 }}
          />
        ),
      }} />
      <Tab.Screen name="Buscar" component={Buscar} options={{
        tabBarIcon: () => (
          <Image
            source={require('./../../../assets/Icons/search_black_36dp.png')}
            style={{ width: 25, height: 25 }}
          />
        ),
      }} />
      <Tab.Screen name="Publicar" component={Publicar} options={{
        tabBarIcon: () => (
          <Image
            source={require('./../../../assets/Icons/add_circle_black_36dp.png')}
            style={{ width: 25, height: 25 }}
          />
        ),
      }} />
      <Tab.Screen name="Mensajes" component={Mensajes} options={{
        tabBarIcon: () => (
          <Image
            source={require('./../../../assets/Icons/question_answer_black_36dp.png')} // Ruta de la imagen
            style={{ width: 25, height: 25 }}
          />
        ),
      }} />
      <Tab.Screen name="Cuenta" component={Cuenta} options={{
        tabBarIcon: () => (
          <Image
            source={require('./../../../assets/Icons/account_circle_black_36dp.png')} // Ruta de la imagen
            style={{ width: 25, height: 25 }}
          />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default BottomTab