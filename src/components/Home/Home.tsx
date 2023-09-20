import React from 'react';
import {
    View,
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = (): JSX.Element => {

    const navigator = useNavigation();

    return(
        <SafeAreaView>
            <Text>HOME</Text>
        </SafeAreaView>
    );
};

export default Home;