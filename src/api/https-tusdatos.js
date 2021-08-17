import axios from "axios";

export default axios.create({
    //pruebas
    baseURL: "http://docs.tusdatos.co",
    //Produccion
    //baseURL: "https://dash-board.tusdatos.co",
    headers: {
        "Content-type": "application/json",
    },
});