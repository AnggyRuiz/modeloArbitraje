import axios from "axios";

//Función de prueba para la conexion con tus datos
const test = async() => {
    var session_url = 'http://docs.tusdatos.co/api/launch';
    var username = 'pruebas';
    var password = 'password';
    var basicAuth = 'Basic ' + btoa(username + ':' + password);
    axios.post(session_url, {
        fechaE: "01/12/2017",
        typedoc: "CC",
        doc: 123,
    }, {
        headers: { 'Authorization': +basicAuth }
    }).then((response) => {
        console.log('Authenticated', response);
    }).catch((error) => {
        console.log('Error on Authentication', error);
    });
}
export default {
    test,
};