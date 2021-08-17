import apiDatos from '@/api/https-tusdatos';

//Función de prueba para la conexion con tus datos
const test = async(data) => {
    const idToken = { usuario: 'pruebas', contraseña: 'password' }
    console.log(idToken);
    console.log("CONECTANDO", data);
    const rta = await apiDatos.post("/api/launch/", { data: data }, {
        headers: {
            "Content-Type": "application/json",
        },
    }).catch(() => {
        return false;
    });
    console.log("rtaaa", rta);
    return rta ? true : false;
};
export default {
    test,
};