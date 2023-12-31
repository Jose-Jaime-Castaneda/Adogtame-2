import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const NavBar = (): JSX.Element => {
    const navigator = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.texto}>
                Adogtame
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6a8faf',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    texto: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 25,
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        letterSpacing: 1.5,
        color: '#f2f2f2',
    },
});

export default NavBar;