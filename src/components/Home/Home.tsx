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

    const MAX_DESCRIP = 28;

    const [showFullDescription, setShowFullDescription] = useState(
        objetos.map(() => false)
    );

    const toggleDescription = (index: number) => {
        const newShowFullDescriptions = [...showFullDescription];
        newShowFullDescriptions[index] = !newShowFullDescriptions[index];
        setShowFullDescription(newShowFullDescriptions);
    };

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
                                <Image
                                    source={require('./../../../assets/Icons/pokeball_black.png')}
                                    style={styles.btnImage} />
                                {/*                                 <Text style={styles.btnTexto}>
                                    ADOPTAR
                                </Text> */}
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.description}>
                            {showFullDescription[index]
                                ? objeto.descripcion
                                : objeto.descripcion.length > MAX_DESCRIP
                                    ? `${showFullDescription[index]
                                        ? objeto.descripcion
                                        : objeto.descripcion.slice(0, MAX_DESCRIP)}...`
                                    : objeto.descripcion}
                        </Text>
                        {objeto.descripcion.length > MAX_DESCRIP && (
                            <TouchableOpacity onPress={() => toggleDescription(index)}>
                                <Text style={styles.leerMas}>
                                    {showFullDescription[index] ? 'Leer menos' : 'Leer más'}
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
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