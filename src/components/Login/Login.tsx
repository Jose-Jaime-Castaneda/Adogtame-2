import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../DB/firebase';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signUp() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        if (user) {
          Alert.alert("Exito", "Se ha iniciado sesion wacha el console log ahi dice")
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        Alert.alert("Error", errorMessage + " Codigo: " + errorCode)
      });
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#f2f2f2", height: "100%" }} >
      <View style={styles.containerImagen}>
        <Image
          source={require('../../../assets/img/ADOGTAME_LOGO_TRANSP.png')}
          style={{ width: '85%', height: 210 }}
        />
      </View>

      <TextInput style={styles.input} placeholder="Correo electronico" placeholderTextColor={"#000"} value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor={"#000"} value={password} onChangeText={setPassword} secureTextEntry={true} />

      <View style={{ alignItems: "center", marginTop: 40 }} >
        <TouchableOpacity style={styles.btn} onPress={signUp} >
          <Text style={styles.btnText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnForgotPassword} >
          <Text style={styles.btnForgotPasswordText}>Olvide la contraseña</Text>
        </TouchableOpacity>

        <View style={styles.containerCreateAccount} >
          <Text style={styles.createAccountText} >¿No tienes cuenta?</Text>
          <TouchableOpacity style={styles.btnCreateAccount}>
            <Text style={styles.btnCreateAccountText}>Crear</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 17,
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
  createAccountText: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 16,

  },
  containerCreateAccount: {
    marginTop: 35,
    flexDirection: 'row',
    gap: 10,
    alignItems: "center"
  },
  btnCreateAccount: {
    backgroundColor: '#6a8faf',
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  btnCreateAccountText: {
    fontFamily: 'Quicksand-Medium',
    color: "white",
    fontWeight: "500",
  },
});
