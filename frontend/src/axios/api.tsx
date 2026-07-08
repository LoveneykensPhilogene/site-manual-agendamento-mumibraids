import Axios from "axios";

const Api = Axios.create({

    baseURL: "https://script.google.com/macros/s/AKfycbzQZIdTKAfWHsPeoXFt7fbv566Ns5Ngxh2MD5qoPxd3C0EtYQchwYvExwkrGA7J-Hq-yQ/exec",
    headers: {
        "Content-Type": "text/plain",
        //"Access-Control-Allow-Origin": "*",
    },

});

export default Api;