import { getAuth } from 'firebase/auth';
import { ip } from '../api/ip.mjs';

export async function getUserInformation() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
        const email = user.email;

        return fetch(`http://${ip}:3000/adogtame/getUsuario/${email}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error al obtener la información del usuario');
                }
            });
    }

    return null;
}
