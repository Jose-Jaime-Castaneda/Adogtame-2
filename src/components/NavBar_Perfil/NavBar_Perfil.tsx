import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar_Perfil = ({ nombreUsuario, apellidoUsuario }: { nombreUsuario: string, apellidoUsuario: string }) => {
    const capitalizeFirstLetter = (usuario: string) => {
        return usuario.charAt(0).toUpperCase() + usuario.slice(1);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.texto}>
                {nombreUsuario && capitalizeFirstLetter(nombreUsuario)} {nombreUsuario && capitalizeFirstLetter(apellidoUsuario)}
            </Text>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6a8faf',
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 25,
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        letterSpacing: 1.5,
        color: '#fff',
    },
});

export default NavBar_Perfil;
