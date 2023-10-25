import express from 'express';
import { ip } from './ip.mjs';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../DB/firebase.mjs';

const app = express();

/******** PUBLICACIONES *********/
app.post('/adogtame/publicaciones/', async (req, res) => {
    // const data = req.data;
    const data = {
        nombre: 'Patroclo',
        raza: 'Pato',
        id_owner: '5',
        fecha_publicacion: Timestamp.now(),
        descripcion: 'PAttottoot',
        edad: '2 años',
    };
    try {
        const docRef = await addDoc(collection(db, 'Publicaciones'), data);
        console.log('Document written with ID: ', docRef.id);
        res.status(200).send({ message: 'Se ha escrito bien espero' });
    } catch (error) {
        res.status(400).send({ message: 'Hubo un error' });
    }
});

app.listen(3000, ip, () => {
    console.log('Server escuchando');
});
