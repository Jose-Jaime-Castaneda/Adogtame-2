import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native'
import NavBar_Perfil from '../NavBar_Perfil/NavBar_Perfil'
import React, { useEffect, useState } from 'react'
import { getUserInformation } from '../../Utils/user.mjs'
import { useNavigation } from '@react-navigation/native';

const Cuenta = (): JSX.Element => {
  const navigator = useNavigation();
  const [userData, setUserData] = useState<any>(null);

  const imagenPerfil = require('./../../../assets/img/ImagenesPrueba/ImgPerfil1.png');

  const capitalizeFirstLetter = (usuario: string) => {
    return usuario.charAt(0).toUpperCase() + usuario.slice(1);
  }

  const editarCuentaBtn = () => {
    navigator.navigate('EditarCuenta');
  }

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
        <View style={styles.coverView}>
        </View>
        <View style={styles.containerTop}>
          <Image source={imagenPerfil} style={styles.imgProfile} />
          <View>
            <TouchableOpacity style={styles.btnEditar} onPress={editarCuentaBtn}>
              <Text style={styles.txtBtn}>
                Editar Perfil
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {userData && (
            <View style={styles.containerInfo}>
              <Text style={styles.txtNombre}>{capitalizeFirstLetter(userData.user.Nombre)} {capitalizeFirstLetter(userData.user.Apellido)}
                <Text style={styles.txtAlias}> ({capitalizeFirstLetter(userData.user.Nickname)})</Text>
              </Text>
              <Text style={styles.txtEmail}>{userData.user.Correo}</Text>
              <Text style={styles.txtEmail}>{userData.user.Telefono}</Text>
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
  coverView: {
    height: 110,
    width: '100%',
    backgroundColor: '#b3a5d4'
  },
  containerTop: {
    flexDirection: 'row',
  },
  btnEditar: {
    marginTop: 15,
    marginLeft: 120,
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: '#b3a5d4',
    borderRadius: 15,
  },
  txtBtn: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: '#fafafa',
  },
  imgProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2.5,
    borderColor: '#fff',
    marginVertical: 10,
    marginLeft: 20,
    marginRight: 10,
    marginTop: -50,
  },
  containerInfo: {
    marginLeft: 20,
  },
  txtNombre: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 1,
  },
  txtAlias: {
    fontWeight: '400',
  },
  txtEmail: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 15,
    fontWeight: '400',
    letterSpacing: 1,
    fontStyle: 'italic',
    marginTop: 2,
  },
})
