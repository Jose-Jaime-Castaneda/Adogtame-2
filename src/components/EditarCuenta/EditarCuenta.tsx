import React, { useState } from 'react';
import {
    ScrollView,
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import NavBar_EditCuenta from '../NavBar_EditCuenta/NavBar_EditCuenta';

type ParamList = {
    EditarCuenta: {
        nombre: string;
        apellido: string;
        nickname: string;
        edad: string;
        telefono: string;
    };
};

type EditarCuentaScreenRouteProp = RouteProp<ParamList, 'EditarCuenta'>;


const EditarCuenta: React.FC<{ route: EditarCuentaScreenRouteProp }> = ({ route }) => {
    const { nombre, apellido, nickname, telefono } = route.params;

    const imagenPerfil = require('./../../../assets/img/ImagenesPrueba/ImgPerfil1.png');

    const GuardarCambios = () => {
        console.log('Nombre editado:');
    };

    return (
        <SafeAreaView style={styles.container}>
            <NavBar_EditCuenta />
            <ScrollView>
                <View style={styles.containerImg}>
                    <Image source={imagenPerfil} style={styles.imgProfile} />
                    <TouchableOpacity>
                        <Text style={styles.txtFoto}>Editar foto de perfil</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        {/* Input para el nombre */}
                        <Text style={styles.label}>Nombre:</Text>
                        <TextInput style={styles.input} value={nombre} />
                        {/* Input para el apellido */}
                        <Text style={styles.label}>Apellido:</Text>
                        <TextInput style={styles.input} value={apellido} />
                        {/* Input para el nickname */}
                        <Text style={styles.label}>Nickname:</Text>
                        <TextInput style={styles.input} value={nickname} />
                        {/* Input para el telefono */}
                        <Text style={styles.label}>Telefono:</Text>
                        <TextInput style={styles.input} value={telefono} />
                    </View>
                </View>
                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.botonEdit} onPress={GuardarCambios}>
                        <Text style={styles.textBtn}>
                            Guardar
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerImg: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgProfile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2.5,
        borderColor: '#000',
        marginTop: 15,
        marginBottom: 5,
    },
    txtFoto: {
        fontFamily: 'Quicksand-Medium',
        color: '#0000FF',
        letterSpacing: .8,
        fontWeight: 'bold',
    },
    inputContainer: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    label: {
        fontFamily: 'Quicksand-Medium',
        fontWeight: 'bold',
        color: '#808080',
        marginTop: 5,
    },
    input: {
        fontFamily: 'Quicksand-Medium',
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        padding: 8,
        fontWeight: 'bold',
        fontSize: 18,
    },
    containerBtn: {
        marginLeft: 10,
        marginTop: 20,
    },
    botonEdit: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: '#b3a5d4',
        borderRadius: 15,
        width: '30%',
    },
    textBtn: {
        textAlign: 'center',
        fontFamily: 'Quicksand-Medium',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default EditarCuenta;