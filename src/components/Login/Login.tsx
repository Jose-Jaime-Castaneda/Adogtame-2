import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#f2f2f2", height: "100%" }} >
      <View style={styles.containerImagen}>
        <Image
          source={require('../../../assets/img/ADOGTAME_LOGO_TRANSP.png')}
          style={{ width: '92%', height: 210 }}
        />
      </View>


      <TextInput style={styles.input} placeholder="Correo electronico" placeholderTextColor={"#000"} />
      <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor={"#000"} />


      <View style={{ alignItems: "center", marginTop: 40 }} >
        <TouchableOpacity style={styles.btn} >
          <Text style={styles.btnText} >Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnForgotPassword} >
          <Text style={styles.btnForgotPasswordText}>Olvide la contraseña</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  containerImagen: {
    alignItems: 'center',
    marginVertical: 30
  },
  input: {
    height: 50,
    marginHorizontal: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: 'Quicksand-Medium',
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
    marginTop: 20,
    width: '80%',
  },
  btnText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '500',
    fontFamily: 'Quicksand-Medium'
  },
  btnForgotPassword: {
    marginTop: 20,
  },
  btnForgotPasswordText: {
    fontSize: 16,
    fontFamily: 'Quicksand-Medium',
    color: "#aaa"
  },
});
