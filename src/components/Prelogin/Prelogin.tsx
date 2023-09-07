import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LottieView from 'lottie-react-native';

function Prelogin(): JSX.Element {

  return (
    <SafeAreaView style = {styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#b3a5d4"} />

      <View>
        <Text style = {styles.texto}>Inicia sesion con tu cuenta o crea una {''}
          <Text>para conseguir tu futura mascota</Text>
        </Text>
      </View>

      <View style={styles.animation}>
        <LottieView
          source={require("./../../../assets/img/AnimacionPreLogin.json")}
          style = {styles.animationImg}
          autoPlay
          loop
        />
      </View>

      <View style = {styles.centerBtn}>
        <TouchableOpacity style = {styles.btn}>
          <Text style = {styles.btnTexto}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.btn}>
          <Text style = {styles.btnTexto}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>

      {/* <View style = {{
        flex: 1,
        alignItems: 'center'
      }}>
        <Image
          source={require('./../../../assets/img/ADOGTAME_LOGO_TRANSP.png')}
          style = {{
            width: '30%',
            height: '30%',
            alignSelf: 'center'
          }}
        />
      </View> */}

    </SafeAreaView>
 );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    justifyContent: 'center',
  },
  texto: {
    marginHorizontal: 50,
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Quicksand-Medium',
  },
  animation:{
    width: "100%",
    alignItems: 'center',
  },
  animationImg:{
    width: '80%',
    aspectRatio: 1,
  },
  centerBtn: {
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#b3a5d4',
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 3.65,
    elevation: 6,
    marginTop: 30,
    width: '80%',
  },
  btnTexto:{
    color: '#000',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Quicksand-Medium'
  },
});

export default Prelogin;
