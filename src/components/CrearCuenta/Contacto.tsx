import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Contacto = (): JSX.Element =>  {
    const navigator = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [telefono, setTelefono] = useState('');

    return (
        
        <SafeAreaView style = {styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"#6a8faf"} />
            <SafeAreaView>
                <View style = {styles.imageContainer}>
                    <Image 
                        source={require('../../../assets/img/ADOGTAME_LOGO_TRANSP.png')} 
                        style = {styles.image}
                    /> 
                </View>
            </SafeAreaView>
            <View style = {styles.whiteBackground}>
                <View style = {styles.formContainer}>
                    <Text style = {styles.formText}>Correo:</Text>
                    <TextInput
                        placeholder='Ingresa tu correo'
                        keyboardType='email-address'
                        style = {styles.formInput}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Text style = {styles.formText}>Contraseña:</Text>
                    <TextInput
                        secureTextEntry={true}
                        placeholder='Ingresa una contraseña'
                        style = {styles.formInput}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Text style = {styles.formText}>Confirmar contraseña:</Text>
                    <TextInput
                        secureTextEntry={true}
                        placeholder='Ingresa de nuevo tu contraseña'
                        style = {styles.formInput}
                        value={password2}
                        onChangeText={setPassword2}
                    />
                    <Text style = {styles.formText}>Teléfono:</Text>
                    <TextInput
                        placeholder='Ingresa un número telefónico'
                        keyboardType='phone-pad'
                        style = {styles.formInput}
                        value={telefono}
                        onChangeText={setTelefono}
                        maxLength={10}
                    />
                    <View>
                        {/* @ts-ignore */}
                        <TouchableOpacity onPress={() => navigator.navigate("Contacto")}
                            style = {styles.btn}
                        >
                            <Text style = {styles.btnText}>
                                Crear cuenta
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.alreadyContainer}>
                    <Text style = {styles.alreadyText}>¿Ya tienes una cuenta?</Text>
                    {/* @ts-ignore */}
                    <TouchableOpacity onPress={() => navigator.navigate("Login")}>
                        <Text style = {styles.iniciarSesion}> Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6a8faf', 
        flex: 1
    },
    imageContainer:{
        flexDirection: 'row', 
        justifyContent: 'center', 
        marginVertical: 20
    },
    image: {
        width: 300, 
        height: 250
    },
    whiteBackground: {
        flex: 1, 
        backgroundColor: '#f2f2f2', 
        paddingLeft: 20, 
        paddingRight: 20, 
        paddingTop: 20, 
        borderTopLeftRadius: 50, 
        borderTopRightRadius: 50
    },
    formContainer:{
        marginTop: 35
    },
    formText: {
        marginLeft: 10, 
        color: '#000', 
        fontFamily: 'Quicksand-Medium'
    },
    formInput: {
        padding: 10, 
        marginBottom: 7.5, 
        marginTop: 10, 
        fontFamily: 'Quicksand-Medium', 
        borderRadius: 10, 
        color: '#374151',
        backgroundColor: '#E8E8E8'
    },
    btn: {
        paddingTop: 15, 
        paddingBottom: 15, 
        marginTop: 10, 
        borderRadius: 10, 
        backgroundColor: '#b3a5d4',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 3.65,
        elevation: 6,
    },
    btnText: {
        color: '#374151', 
        textAlign: 'center', 
        fontFamily: 'Quicksand-Bold'
    },
    alreadyContainer: {
        marginTop: 17.5, 
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    alreadyText: {
        color: '#6B7280', 
        fontFamily: 'Quicksand-SemiBold',
    },
    iniciarSesion: {
        color: '#b3a5d4', 
        fontFamily: 'Quicksand-Bold'
    } 
});

export default Contacto;
