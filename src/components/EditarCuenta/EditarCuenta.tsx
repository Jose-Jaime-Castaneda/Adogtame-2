import React, { useState } from 'react';
import {
    ScrollView,
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavBar from '../NavBar/NavBar';

const Home = (): JSX.Element => {
    const navigator = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <NavBar />
            <ScrollView>
                <Text>Hola</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        backgroundColor: '#f2f2f2',
    },
    cardTitle: {
        borderTopColor: "#b3a5d4",
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    imgProfile: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 2.5,
        borderColor: '#b3a5d4',
        marginVertical: 10,
        marginLeft: 20,
        marginRight: 10,
    },
    profileName: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    imgPet: {
        width: '100%',
        height: 400,
        objectFit: 'cover',
    },
    description: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 1.3,
        paddingLeft: 8,
        paddingVertical: 10,
        backgroundColor: '#f2f2f2',
        marginHorizontal: 10,
        position: 'relative',
    },
    containerBtn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },
    btnAdogtar: {
        paddingVertical: 4,
        paddingHorizontal: 12,
        marginTop: 15,
        marginLeft: 18,
        borderRadius: 10,
        backgroundColor: '#b3a5d4',
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnImage: { 
        width: 40,
        height: 40,
    },
    btnTexto: {
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Quicksand-Bold',
        fontSize: 18,
    },
    leerMas: {
        position: 'absolute',
        bottom: 10,
        right: 8,
        backgroundColor: '#f2f2f2',
        color: "#b3a5d4",
    },
});

export default Home;