import React from 'react';
import {
    View,
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavBar from '../NavBar/NavBar';


const Home = (): JSX.Element => {
    const navigator = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <NavBar />
            <Text>HOME</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        flex: 1,
    },
});

export default Home;