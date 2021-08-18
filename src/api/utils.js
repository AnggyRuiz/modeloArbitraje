import tusDatos from './https-tusdatos';

//Función de prueba para la conexion con tus datos
const test = async() => {
    const username = 'sosorno@isciolab.com';
    const password = 'S52e68b0';
    const basicAuth = 'Basic ' + btoa(username + ':' + password);
    const rta = await tusDatos
        .post(
            '/api/launch', { "fechaE": "02/05/2017", "typedoc": "CC", "doc": 1097408141 }, {
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