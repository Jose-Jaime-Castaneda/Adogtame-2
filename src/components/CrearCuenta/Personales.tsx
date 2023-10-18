import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Personales = () =>  {

    const navigator = useNavigation();

    const [nombre, setNombre] = useState<string>('');
    const [apellido, setApellido] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');
    const [edad, setEdad] = useState<string>('');

    /* =========== VALIDAR CAMPOS EN BLANCO ========= */
    const validarCampos = () => {
        if ([nombre, apellido, nickname, edad].includes('')){
            return false;
        } else{
            return true;
        }
    }

    /* ========== VALIDAR LA EDAD ========== */
    const validarEdad = (edad: string) => {
        const edadNumero = parseInt(edad, 10);
        return !isNaN(edadNumero) && edadNumero >= 12 && edadNumero <= 99;
      };

    /* =========== RESETEAR CAMPOS ========= */
    const clear = () => {
        setNombre('')
        setApellido('')
        setNickname('')
        setEdad('')
    };

    /* ========= CONGLOMERADO DE VALIDACIONES ======== */
    const conglomerado = () => {
        if (!validarCampos()){
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios',
                [
                    {text: 'Aceptar'}
                ]
            )
            return;
        }
        else if (!validarEdad(edad)){
            Alert.alert(
                'Error',
                'No cumples con la edad para usar esta aplicación',
                [
                    {text: 'Aceptar'}
                ]
            )
            return;
        } else {
                clear();
                {/* @ts-ignore */}
                navigator.navigate('Contacto', { nombre, apellido, nickname, edad });
        }        
    };

    return (
        <SafeAreaView style = {styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"#6a8faf"} />
            
            <KeyboardAvoidingView 
                style={{flex: 1}} 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style= {styles.inner}>
                    <View style = {styles.imageContainer}>
                        <Image 
                            source={require('../../../assets/img/ADOGTAME_LOGO_TRANSP.png')} 
                            style = {styles.image}
                        /> 
                    </View>
                
                    <View style = {styles.whiteBackground}>
                        <View style = {styles.formContainer}>
                            <View style = {styles.profileImageContainer}>
                                <TouchableOpacity style = {styles.profileImage}>
                                    <Text style = {styles.profile}>+</Text>
                                </TouchableOpacity>
                                <Text style = {[styles.profileText, styles.formText]}>Foto de perfil</Text>
                            </View>

                            <Text style = {styles.formText}>Nombre {'(s)'}:</Text>
                            <TextInput
                                placeholder='Ingresa tu nombre (s)'
                                style = {styles.formInput}
                                value={nombre}
                                onChangeText = {(text) => setNombre(text)}

                            />

                            <Text style = {styles.formText}>Apellido {'(s)'}:</Text>
                            <TextInput
                                placeholder='Ingresa tu apellido (s)'
                                style = {styles.formInput}
                                value={apellido}
                                onChangeText = {(text) => setApellido(text)}
                            />

                            <Text style = {styles.formText}>Nickname {'(Alias)'}:</Text>
                            <TextInput
                                placeholder='Apodo'
                                style = {styles.formInput}
                                value={nickname}
                                onChangeText = {(text) => setNickname(text)}
                            />

                            <Text style = {styles.formText}>Edad:</Text>
                            <TextInput
                                placeholder='Ingresa tu edad'
                                keyboardType='numeric'
                                style = {styles.formInput}
                                value={edad}
                                onChangeText = {(text) => setEdad(text)}
                                maxLength={3}
                            />

                            <TouchableOpacity style = {styles.btn} onPress={conglomerado}>
                                <Text style = {styles.btnText}>
                                    Continuar
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style = {styles.centerTextContainer}>
                            <Text style = {styles.alreadyText}>¿Ya tienes una cuenta?</Text>
                            {/* @ts-ignore */}
                            <TouchableOpacity onPress={() => navigator.navigate("Login")}>
                                <Text style = {styles.iniciarSesion}> Iniciar sesión</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6a8faf', 
    },
    inner: {
        flex: 1,
        justifyContent: 'space-between',
    },
    imageContainer:{
        flexDirection: 'row', 
        justifyContent: 'center', 
        marginTop: 25
    },
    image: {
        width: 250, 
        height: 200,
        position: "absolute",
    },
    whiteBackground: {
        backgroundColor: '#f2f2f2', 
        padding: 20,
        paddingBottom: 40, 
        borderTopLeftRadius: 50, 
        borderTopRightRadius: 50
    },
    formContainer:{
        marginTop: 0,
    },
    profileImageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImage:{
        width: 75, 
        height: 75, 
        backgroundColor: '#E8E8E8', 
        borderRadius: 100
    },
    profile:{
        textAlign: 'center', 
        fontSize: 50, 
        color: '#BBB'
    },
    profileText: {
        marginBottom: 10
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
    centerTextContainer: {
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
})

export default Personales;
