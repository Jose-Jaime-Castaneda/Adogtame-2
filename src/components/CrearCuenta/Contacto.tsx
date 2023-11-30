import React, { FunctionComponent, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar,
    Alert,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../../DB/firebase.mjs';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { RouteProp } from '@react-navigation/native';

type ParamList = {
    Contacto: {
      nombre: string;
      apellido: string;
      nickname: string;
      edad: number;
    };
  };

type ContactoScreenRouteProp = RouteProp<ParamList, 'Contacto'>;

const Contacto: React.FC<{ route: ContactoScreenRouteProp }> = ({ route }) => {
    const { nombre, apellido, nickname, edad } = route.params;
    const navigator = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [telefono, setTelefono] = useState('');
    const [loading, setLoading] = useState(false);

    /* ========= Validar email ========= */
    const validarEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    /* =========== Validar contraseña =========== */
    const validarPassword = (contrasena: string) => {
        // Verifica si la contraseña tiene al menos 8 caracteres
        if (contrasena.length < 8) {
            return false;
        }
        // Verifica si la contraseña comienza con una letra mayúscula
        const primeraLetra = contrasena.charAt(0);
        if (!/[A-Z]/.test(primeraLetra)) {
            return false;
        }
        // Verifica si la contraseña contiene al menos un número
        if (!/\d/.test(contrasena)) {
            return false;
        }
        return true;
    };

    /* =========== Validar número de teléfono =========== */
    const validarTelefono = (tel: string) => {
        if (tel.length < 10) {
            return false;
        }
        return true;
    }

    /* =========== RESETEAR CAMPOS ========= */
    const clear = () => {
        setEmail('')
        setPassword('')
        setPassword2('')
        setTelefono('')
    }

    /* =========== MANDAR LOS DATOS A LA BD =========== */
    const signUp = async () => {
        setLoading(true);
        try {
            createUserWithEmailAndPassword(auth, email, password)
                .then(async () => {
                    await addDoc(collection(db, "Usuarios"), {
                        Nombre: nombre,
                        Apellido: apellido,
                        Nickname: nickname,
                        Edad: edad,
                        Telefono: telefono,
                        Correo: email,
                        Contraseña: password
                    });
                    clear();
                    Alert.alert(
                        "🐶 Adogcuenta 🐶",
                        "¡Tu Adogcuenta fue creada con éxito!",
                        [
                            { text: 'Aceptar' }
                        ]
                    );
                    {/* @ts-ignore */ }
                    navigator.navigate('Login')
                })
        } catch (error: any) {
            Alert.alert('Registro NO exitoso' + error.message)
        } finally {
            setLoading(false);
        }
    }


    /* ======== VERIFICAR QUE EL CORREO NO EXISTA ANTES DE CREAR LA CUENTA ======= */
    const verificarCorreoExistente = async (email: string) => {
        const usuariosRef = collection(db, 'Usuarios');
        const q = query(usuariosRef, where('Correo', '==', email));
        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty;
    };

    /* =========== CONGLOMERADO DE VALIDACIONES =========== */
    const conglomerado = async () => {
        if ([email, password, password2, telefono].includes('')) {
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios',
                [
                    { text: 'Aceptar' }
                ]
            )
            return;
        }
        else if (!validarEmail(email)) {
            Alert.alert(
                'Error',
                'Ingrese un correo válido',
                [
                    { text: 'Aceptar' }
                ]
            )
            return;
        }
        else if (!validarPassword(password)) {
            Alert.alert(
                'Error',
                'La contraseña debe tener al menos 8 caracteres, comenzar con una letra mayúscula y contener al menos un número.',
                [
                    { text: 'Aceptar' }
                ]
            );
            return;
        }
        //Validar que las contraseñas coincidan
        else if (password !== password2) {
            Alert.alert(
                'Error',
                'La contraseña y la confirmación de contraseña no coinciden.',
                [
                    { text: 'Aceptar' }
                ]
            );
            return;
        }
        else if (!validarTelefono(telefono)) {
            Alert.alert(
                'Error',
                'El numero de teléfono debe tener 10 digitos',
                [{ text: 'Aceptar' }]
            )
            return;
        }
        else {
            // Verificar si el correo ya está registrado
            const correoExiste = await verificarCorreoExistente(email);
            if (correoExiste) {
                Alert.alert(
                    'Error',
                    'El correo ya está registrado. Por favor, intente con otro correo',
                    [{ text: 'Aceptar' }]
                );
                return;
            } else {
                signUp();
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"#6a8faf"} />

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.inner}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../../../assets/img/ADOGTAME_LOGO_TRANSP.png')}
                            style={styles.image}
                        />
                    </View>

                    <View style={styles.whiteBackground}>
                        <Text style={{ textAlign: "center", fontFamily: 'Quicksand-Medium' }}>Ingresa tus datos para crear tu cuenta</Text>

                        <View style={styles.formContainer}>

                            <Text style={styles.formText}>Correo:</Text>
                            <TextInput
                                placeholder='Ingresa tu correo'
                                keyboardType='email-address'
                                style={styles.formInput}
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />
                            <Text style={styles.formText}>Contraseña:</Text>
                            <TextInput
                                secureTextEntry={true}
                                placeholder='Ingresa una contraseña'
                                style={styles.formInput}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                            />
                            <Text style={styles.formText}>Confirmar contraseña:</Text>
                            <TextInput
                                secureTextEntry={true}
                                placeholder='Ingresa de nuevo tu contraseña'
                                style={styles.formInput}
                                value={password2}
                                onChangeText={(text) => setPassword2(text)}
                            />
                            <Text style={styles.formText}>Teléfono:</Text>
                            <TextInput
                                placeholder='Ingresa un número telefónico'
                                keyboardType='phone-pad'
                                style={styles.formInput}
                                value={telefono}
                                onChangeText={(text) => setTelefono(text)}
                                maxLength={10}
                            />
                            <View>
                                {/* @ts-ignore */}
                                <TouchableOpacity onPress={conglomerado}
                                    style={styles.btn}
                                >
                                    <Text style={styles.btnText}>
                                        Crear cuenta
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.centerTextContainer}>
                            <Text style={styles.alreadyText}>¿Ya tienes una cuenta?</Text>
                            {/* @ts-ignore */}
                            <TouchableOpacity onPress={() => navigator.navigate("Login")}>
                                <Text style={styles.iniciarSesion}> Iniciar sesión</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6a8faf',
    },
    inner: {
        flex: 1,
        justifyContent: 'space-between',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20
    },
    image: {
        width: 250,
        height: 200,
        position: "absolute",
    },
    whiteBackground: {
        backgroundColor: '#f2f2f2',
        padding: 20,
        paddingBottom: 40,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },
    formContainer: {
        marginTop: 35,
    },
    formText: {
        marginLeft: 10,
        color: '#000',
        fontFamily: 'Quicksand-Medium'
    },
    formInput: {
        padding: 10,
        marginBottom: 7.5,
        marginTop: 10,
        fontFamily: 'Quicksand-Medium',
        borderRadius: 10,
        color: '#374151',
        backgroundColor: '#E8E8E8'
    },
    btn: {
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 10,
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
    btnText: {
        color: '#374151',
        textAlign: 'center',
        fontFamily: 'Quicksand-Bold'
    },
    centerTextContainer: {
        marginTop: 17.5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    alreadyText: {
        color: '#6B7280',
        fontFamily: 'Quicksand-SemiBold',
    },
    iniciarSesion: {
        color: '#b3a5d4',
        fontFamily: 'Quicksand-Bold'
    }
});

export default Contacto;
