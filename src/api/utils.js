import axios from "axios";

//Función de prueba para la conexion con tus datos
const test = async() => {
    var session_url = 'http://docs.tusdatos.co/api/launch';
    var uname = 'pruebas';
    var pass = 'password';
    axios.post(session_url, {}, {
        auth: {
            username: uname,
            password: pass
        }
    }).then(function(res) {
        console.log('Authenticated', res);
    }).catch(function(error) {
        console.log('Error on Authentication', error);
    });
}
export default {
    test,
};