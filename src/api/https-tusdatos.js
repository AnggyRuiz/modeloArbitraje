import axios from "axios";

export default axios.create({
    //pruebas
    baseURL: "http://docs.tusdatos.co/api",
    //Produccion
    //baseURL: "https://dash-board.tusdatos.co",
    headers: {
        "Content-type": "application/json",
    },
});