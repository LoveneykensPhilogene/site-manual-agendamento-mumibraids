import Axios from "axios";

const Api = Axios.create({

    baseURL: "https://script.google.com/macros/s/AKfycbz92lvwiF1_jk_fbeJJSaZDr5NksZHinyF30wecuMD3nlv5nXxyxw5_0Mk-z4GTP3YgGg/exec",
    headers: {
        "Content-Type": "text/plain",
        //"Access-Control-Allow-Origin": "*",
    },

});

export default Api;