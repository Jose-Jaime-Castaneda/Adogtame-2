import React from 'react';
import {
    ScrollView,
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavBar from '../NavBar/NavBar';


const Home = (): JSX.Element => {
    const navigator = useNavigation();

    const objetos = [
        {
            imagenPerfil: require('./../../../assets/img/ImagenesPrueba/ImgPerfil1.png'),
            nombreUsuario: 'Alma Marcela',
            imagenPublicacion: require('./../../../assets/img/ImagenesPrueba/ImgMascota1.png'),
            descripcion: 'Esta es una mascota miuto bonita',
        },
        {
            imagenPerfil: require('./../../../assets/img/ImagenesPrueba/ImgPerfil2.png'),
            nombreUsuario: 'Agustin del Hoyo',
            imagenPublicacion: require('./../../../assets/img/ImagenesPrueba/ImgMascota2.png'),
            descripcion: 'Esta es una mascota miuto bonita2',
        },
        {
            imagenPerfil: require('./../../../assets/img/ImagenesPrueba/ImgPerfil3.png'),
            nombreUsuario: 'Joselo Palmas',
            imagenPublicacion: require('./../../../assets/img/ImagenesPrueba/ImgMascota3.png'),
            descripcion: 'Esta es una mascota miuto bonita3',
        },
        {
            imagenPerfil: require('./../../../assets/img/ImagenesPrueba/ImgPerfil4.png'),
            nombreUsuario: 'Elva Ginon',
            imagenPublicacion: require('./../../../assets/img/ImagenesPrueba/ImgMascota4.png'),
            descripcion: 'Esta es una mascota miuto bonita4',
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <NavBar />
            <ScrollView>
                {objetos.map((objeto, index) => (
                    <View style={styles.card} key={index}>
                        <View style={styles.cardTitle}>
                            <Image source={objeto.imagenPerfil} style={styles.imgProfile} />
                            <Text style={styles.profileName}>{objeto.nombreUsuario}</Text>
                        </View>
                        <Image source={objeto.imagenPublicacion} style={styles.imgPet} />
                        <Text style={styles.description}>{objeto.descripcion}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        flex: 1,
    },
    card: {
        backgroundColor: '#f8b',
    },
    cardTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8b',
    },
    imgProfile: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#000',
        margin: 6,
    },
    profileName: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 15,
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
        fontWeight: '800',
        letterSpacing: 1,
        paddingLeft: 8,
        paddingVertical: 10,
        backgroundColor: '#f8b',
    },
});

export default Home;