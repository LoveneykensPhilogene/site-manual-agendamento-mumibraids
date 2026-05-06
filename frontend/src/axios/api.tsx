import Axios from "axios";

const Api = Axios.create({

    baseURL: "https://script.google.com/macros/s/AKfycbwicz7BJ1x2KvQhM9u0abe0jQcZV5WZIKI1sZKk__n_k82xOIYi6thvZ22-YkiQst58KQ/exec",
    headers: {
        "Content-Type": "text/plain",
        //"Access-Control-Allow-Origin": "*",
    },

});

export default Api;