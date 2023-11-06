import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import NavBar_Perfil from '../NavBar_Perfil/NavBar_Perfil'
import React, { useEffect, useState } from 'react'
import { getUserInformation } from '../../Utils/user.mjs'

const Cuenta = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userInformation = await getUserInformation();
        if (userInformation) {
          setUserData(userInformation);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
<NavBar_Perfil nombreUsuario={userData && userData.user.Nombre} apellidoUsuario={userData && userData.user.Apellido} />
      <ScrollView>
        <View>
          <Text>Cuenta</Text>
          {userData && (
            <View>
              <Text>Información del usuario</Text>
              <Text>Nombre: {userData.user.Nombre}</Text>
              <Text>Apellido: {userData.user.Apellido}</Text>
              <Text>Alias: {userData.user.Nickname}</Text>
              <Text>Email: {userData.user.Correo}</Text>
              <Text>Telefono: {userData.user.Telefono}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Cuenta

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
