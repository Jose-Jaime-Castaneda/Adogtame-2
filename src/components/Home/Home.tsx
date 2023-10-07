import React from 'react';
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

    const objetos = [
        {
            imagenPerfil: require('./../../../assets/img/ImagenesPrueba/ImgPerfil1.png'),
            nombreUsuario: 'Alma Marcela',
            imagenPublicacion: require('./../../../assets/img/ImagenesPrueba/ImgMascota1.png'),
            descripcion: 'lorem ipsum no me acuerdo que más pero esto tiene que ser un texto muy largo para ver que si jale chido la che página toda pedorra.',
        },
        {
            imagenPerfil: require('./../../../assets/img/ImagenesPrueba/ImgPerfil2.png'),
            nombreUsuario: 'Agustin del Hoyo',
            imagenPublicacion: require('./../../../assets/img/ImagenesPrueba/ImgMascota2.png'),
            descripcion: 'Este texto también tiene que estar largo para que el usuario pueda escribir cuanta torombolada se le ocurra.',
        },
        {
            imagenPerfil: require('./../../../assets/img/ImagenesPrueba/ImgPerfil3.png'),
            nombreUsuario: 'Joselo Palmas',
            imagenPublicacion: require('./../../../assets/img/ImagenesPrueba/ImgMascota3.png'),
            descripcion: 'Ahorita estoy pensado que tal vez necesitemos hacer algo como en X para hacer que las descripción tenga un numéro de caracteres limitados.',
        },
        {
            imagenPerfil: require('./../../../assets/img/ImagenesPrueba/ImgPerfil4.png'),
            nombreUsuario: 'Elva Ginon',
            imagenPublicacion: require('./../../../assets/img/ImagenesPrueba/ImgMascota4.png'),
            descripcion: 'aisfgauyfgnquyfgausyfbausdfbuasndbasbndfyas bdiufasb diufasbdfuisabd fuisadb fuisadbfusaidbfuashdbfuisadbf saudhfbsaudhfbausidhbf saiudfbsaiudhfbsad fuisahd',
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
                        <View style={styles.containerBtn}>
                            <TouchableOpacity style={styles.btnAdogtar}>
                                <Text style={styles.btnTexto}>
                                    ADOPTAR
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.description}>{objeto.descripcion}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    card: {
        backgroundColor: '#f2f2f2',
        marginBottom: 10,
    },
    cardTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
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
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
        paddingLeft: 8,
        paddingVertical: 10,
        backgroundColor: '#f2f2f2',
        marginHorizontal: 10,
    },
    containerBtn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    btnAdogtar: {
        paddingVertical: 10,
        paddingHorizontal: 8,
        marginTop: 15,
        marginLeft: 20,
        borderRadius: 10,
        backgroundColor: '#b3a5d4',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 3.65,
        elevation: 6,
    },
    btnTexto: {
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Quicksand-Bold',
        fontSize: 18,
    },
});

export default Home;