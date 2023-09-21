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
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Personales = (): JSX.Element =>  {

    const navigator = useNavigation();

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [nickname, setNickname] = useState('');
    const [edad, setEdad] = useState('');

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
                        onChangeText = {setNombre}

                    />

                    <Text style = {styles.formText}>Apellido {'(s)'}:</Text>
                    <TextInput
                        placeholder='Ingresa tu apellido (s)'
                        style = {styles.formInput}
                        value={apellido}
                        onChangeText = {setApellido}
                    />

                    <Text style = {styles.formText}>Nickname {'(Alias)'}:</Text>
                    <TextInput
                        placeholder='Apodo'
                        style = {styles.formInput}
                        value={nickname}
                        onChangeText = {setNickname}
                    />

                    <Text style = {styles.formText}>Edad:</Text>
                    <TextInput
                        placeholder='Ingresa tu edad'
                        keyboardType='numeric'
                        style = {styles.formInput}
                        value={edad}
                        onChangeText = {setEdad}
                        maxLength={3}
                    />

                    {/* @ts-ignore */}
                    <TouchableOpacity onPress={() => navigator.navigate("Contacto")}
                        style = {styles.btn}
                        
                    >
                        <Text style = {styles.btnText}>
                            Continuar
                        </Text>
                    </TouchableOpacity>

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
        marginTop: 25
    },
    image: {
        width: 250, 
        height: 200
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
        marginTop:5
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
})

export default Personales;
