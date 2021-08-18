import tusDatos from './https-tusdatos';

//Función de prueba para la conexion con tus datos
const test = async() => {
    const username = 'pruebas';
    const password = 'password';
    const basicAuth = 'Basic ' + btoa(username + ':' + password);
    const rta = await tusDatos
        .post(
            '/api/launch', { "fechaE": "01/12/2017", "typedoc": "CC", "doc": 123 }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: basicAuth,
                },
            }).catch((err) => {
            console.log(err);
            return false;
        });
    console.log('rtaaaaaa', rta);
    return rta ? true : false;

}
export default {
    test,
};