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


const Home = (): JSX.Element => {
    const navigator = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text>HOME</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        justifyContent: 'center',
    },
});

export default Home;