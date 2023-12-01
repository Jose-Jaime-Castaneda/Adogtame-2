import React, { useState } from 'react';
import {
    ScrollView,
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
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
    const { nombre, apellido, nickname, edad, telefono } = route.params;

    return (
        <SafeAreaView>
            <NavBar_EditCuenta />
            <ScrollView>
                <Text>{nombre}</Text>
                <Text>{apellido}</Text>
                <Text>{nickname}</Text>
                <Text>{edad}</Text>
                <Text>{telefono}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
});

export default EditarCuenta;