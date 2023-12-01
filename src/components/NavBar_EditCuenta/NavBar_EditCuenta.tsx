import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar_EditCuenta = () => {
    const navigator = useNavigation();

    const Regresar = () => {
        navigator.navigate('Cuenta' as never);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={Regresar}>
                    <Image
                        source={require('./../../../assets/Icons/arrow_back.png')}
                        style={{ width: 30, height: 30, tintColor: '#fff' }}
                    />
                </TouchableOpacity>
                <Text style={styles.texto}>
                    Editar Perfil
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6a8faf',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    texto: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 20,
        marginLeft: 8,
        marginBottom: 5,
        color: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginBottom: 5,
    }
});

export default NavBar_EditCuenta;