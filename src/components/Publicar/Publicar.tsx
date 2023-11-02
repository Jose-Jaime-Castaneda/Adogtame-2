import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ip } from '../../api/ip.mjs';
import { launchImageLibrary } from 'react-native-image-picker';
import { SelectList } from 'react-native-dropdown-select-list'
import { getAuth } from 'firebase/auth';
import uuid from "react-native-uuid";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Publicar = (): JSX.Element => {
    const [edadTiempo, setEdadTiempo] = useState("Años");
    const [raza, setRaza] = useState("");
    const [razas, setRazas] = useState([]);
    const [image, setImage] = useState(null);
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const apiKeyRazas = "live_YuyN5LFC4q3ZMOrsirfBGArE9etfnd2pOVLMGUC5dvzRLWEVPJxpZBZYenCm951Q";

    useEffect(() => {
        fetch(`https://api.thedogapi.com/v1/breeds/?api_key=${apiKeyRazas}`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const nombresRaza: any = data.map((d) => d.name)
                    setRazas(nombresRaza)
                }
            })
            .catch(error => {
                console.error('Error en la solicitud de red:', error);
            });

    }, []);

    const verificarDatos = (): boolean => {
        const camposVacios = [nombre, edad, descripcion, raza, image].some(valor => !valor || valor.trim() === '');

        return camposVacios;
    }

    async function subirImagen() {
        if (image != null) {
            const IDPhoto = uuid.v4();
            const storage = getStorage();
            const imageRef = ref(storage, `Images/${IDPhoto}.jpg`);

            const response = await fetch(image);
            const blob = await response.blob();

            await uploadBytes(imageRef, blob);
            return await getDownloadURL(imageRef);
        } else {
            return "Hooa"
        }
    }

    const publicar = async () => {
        if (verificarDatos()) {
            Alert.alert("Error", "Llene todos los campos y/o imagen, no sea flojo")
        } else {
            const auth = getAuth();
            const owner = auth.currentUser?.email;
            const i = await subirImagen()

            const mascota = {
                nombre: nombre,
                raza: raza,
                edad: `${edad} ${edadTiempo}`,
                descripcion: descripcion,
                imagen: i,
                id_owner: owner
            }

            const opciones = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mascota)
            }

            fetch(`http://${ip}:3000/adogtame/publicaciones/`, opciones)
                .then(res => res.json())
                .then(data => Alert.alert(data.title, data.message))
                .catch(error => {
                    Alert.alert(error.title, error.message);
                });
        }
    }

    const data = [
        { key: '1', value: 'Años' },
        { key: '2', value: 'Meses' },
        { key: '3', value: 'Dias' },
    ]

    const launchImagePicker = (): void => {
        launchImageLibrary({
            mediaType: 'photo'
        }, (response: any) => {
            if (response.didCancel) {
                Alert.alert("Suba algo", "No cancele culiao")
            } else {
                const source = response.assets[0].uri;
                /* @ts-ignore */
                setImage(source)
            }
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#6a8faf'} />

            <ScrollView style={{ flex: 1 }} >
                <KeyboardAvoidingView
                    style={styles.whiteBackground}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                    <View style={styles.profileImageContainer}>
                        <TouchableOpacity style={styles.profileImage} onPress={() => launchImagePicker()}>
                            {image === null || image === "" ?
                                <Text style={styles.profile}>+</Text> :
                                <Image
                                    source={{ uri: image }}
                                    style={styles.imagen}
                                />}
                        </TouchableOpacity>
                        <Text style={[styles.profileText, styles.formText]}>
                            Foto del chucho 🐶 o michi 😺
                        </Text>
                    </View>

                    <Text style={styles.formText}>Nombre (s):</Text>
                    <TextInput
                        placeholder='Ingresa su nombre (s)'
                        style={styles.formInput}
                        value={nombre}
                        onChangeText={(text) => setNombre(text)}
                    />

                    <Text style={styles.formText}>Edad:</Text>
                    <View style={styles.row}>

                        <TextInput
                            placeholder='Ingresa su edad'
                            style={styles.formInputEdad}
                            value={edad}
                            onChangeText={(text) => setEdad(text)}
                        />
                        <SelectList
                            setSelected={(val: string) => setEdadTiempo(val)}
                            data={data}
                            save="value"
                            search={false}
                            boxStyles={{ backgroundColor: "#E8E8E8" }}
                            dropdownStyles={{ backgroundColor: "#E8E8E8" }}
                            dropdownTextStyles={{ fontFamily: 'Quicksand-Medium' }}
                            placeholder='Años'
                        />
                    </View>

                    <Text style={styles.formText}>Raza:</Text>
                    <SelectList
                        setSelected={(val: string) => setRaza(val)}
                        data={razas}
                        save="value"
                        boxStyles={{
                            backgroundColor: "#E8E8E8", marginBottom: 7.5,
                            marginTop: 10,
                        }}
                        search={false}
                        dropdownStyles={{ backgroundColor: "#E8E8E8" }}
                        fontFamily='Quicksand-Medium'
                        dropdownTextStyles={{ fontFamily: 'Quicksand-Medium' }}
                        placeholder='Seleccionas la raza'
                    />

                    <Text style={styles.formText}>Descripción:</Text>
                    <TextInput
                        editable
                        multiline
                        numberOfLines={4}
                        maxLength={40}
                        placeholder='Describa habitos, personalidad, cuidados especiales...'
                        onChangeText={text => setDescripcion(text)}
                        value={descripcion}
                        style={styles.formInput}
                    />

                    <View style={styles.center}>
                        <TouchableOpacity style={styles.btn} onPress={() => publicar()}>
                            <Text style={styles.btnTexto}>Publicar</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Publicar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    whiteBackground: {
        backgroundColor: '#f2f2f2',
        padding: 10,
        flex: 1,
    },
    profileImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    profileImage: {
        width: 75,
        height: 75,
        backgroundColor: '#E8E8E8',
        borderRadius: 100,
    },
    profile: {
        textAlign: 'center',
        fontSize: 50,
        color: '#BBB',
    },
    profileText: {
        marginBottom: 10,
    },
    formText: {
        marginLeft: 10,
        color: '#000',
        fontFamily: 'Quicksand-Medium',
    },
    formInput: {
        padding: 10,
        marginBottom: 7.5,
        marginTop: 10,
        fontFamily: 'Quicksand-Medium',
        borderRadius: 10,
        color: '#374151',
        backgroundColor: '#E8E8E8',
    },
    formInputEdad: {
        padding: 10,
        marginBottom: 7.5,
        marginTop: 10,
        fontFamily: 'Quicksand-Medium',
        borderRadius: 10,
        color: '#374151',
        backgroundColor: '#E8E8E8',
        flex: 1
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    btn: {
        backgroundColor: '#b3a5d4',
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 3.65,
        elevation: 6,
        marginVertical: 20,
        width: '90%',
    },
    btnTexto: {
        color: '#000',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Quicksand-Medium'
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    imagen: {
        width: 75,
        height: 75,
        borderRadius: 100,
    }
});
