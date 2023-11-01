import express from 'express';
import { ip } from './ip.mjs';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
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
        res.status(400).send({ message: 'Algo fallo wacho', title: "Error" });
    }
});

app.listen(3000, ip, () => {
    console.log('Server escuchando');
});
