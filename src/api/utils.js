import http from "./https-tusdatos";
// metodo para probar conexion con tus datos
const test = async(data) => {
    const username = 'pruebas';
    const password = 'password';
    const basicAuth = 'Basic ' + btoa(username + ':' + password);
    console.log("BEFORE SEARCH", basicAuth);
    const rta = await http
        .post(
            "/launch", { data: data }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: 'Basic cHJ1ZWJhczawYXNzd09tDA==',
                },
            }
        )
        .catch(() => {
            return false;
        });
    console.log("rtaaa", rta);
    return rta ? true : false;
};

export default {
    test,
};