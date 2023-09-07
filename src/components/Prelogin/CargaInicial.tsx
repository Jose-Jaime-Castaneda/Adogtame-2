import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    View,
    Image,
} from 'react-native';

function CargaInicial(): JSX.Element {
    return (
        <SafeAreaView style = {styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"#b3a5d4"} />
            <View style = {styles.containerImg}>
                <Image
                    source={require('./../../../assets/img/ADOGTAME_LOGO_TRANSP.png')}
                    style = {styles.img}
                />
            </View>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b3a5d4',
        flex: 1
    },
    containerImg: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    img: {
        width: '75%',
        height: '25%'
    }
});

export default CargaInicial;