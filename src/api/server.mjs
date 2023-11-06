import express from 'express';
import { ip } from './ip.mjs';
import {
    collection,
    addDoc,
    Timestamp,
    getDocs,
    query,
    where
} from 'firebase/firestore';
import { db } from '../DB/firebase.mjs';

const app = express();

// Middleware para analizar JSON en el cuerpo de la solicitud
app.use(express.json());

/******** PUBLICACIONES *********/
app.post('/adogtame/publicaciones/', async (req, res) => {
    const data = req.body;

    try {
        const docRef = await addDoc(collection(db, 'Publicaciones'), {
            nombre: data.nombre,
            imagen: data.imagen,
            descripcion: data.descripcion,
            fecha_publicacion: Timestamp.now(),
            edad: data.nombre,
            raza: data.raza,
            id_owner: data.id_owner,
        });

        console.log('Document written with ID: ', docRef.id);
        res.status(200).send({ message: 'Se ha subido correctamente', title: "Exito" });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: 'Algo ha fallado contacte con el administrador', title: "Error", Error: error });
    }
});

app.get('/adogtame/getUsuario/:email', async (req, res) => {
    const email = req.params.email;

    const userCollection = collection(db, 'Usuarios');
    const queryUser = query(userCollection, where('Correo', '==', email));

    const response = await getDocs(queryUser);

    if (response.docs.length === 0) {
        console.log("No existe el documento");
        res.status(400).json({ message: 'No existe el documento', title: 'Error' });
    } else {
        const doc = response.docs[0];
        if (doc.exists) {
            const userData = doc.data();
            //console.log("Información del usuario:", userData);
            res.status(200).json({ message: 'Información del usuario obtenida con éxito', title: 'Éxito', user: userData });
        } else {
            console.log("No existe el documento");
            res.status(400).json({ message: 'No existe el documento', title: 'Error' });
        }
    }
});

app.listen(3000, ip, () => {
    console.log('Server escuchando');
});
