import Axios  from "axios";
 const Api=Axios.create({

     baseURL:"https://script.google.com/macros/s/AKfycbxut4bWFT_G_6KxdVH8VjsDGxXtlVADeHt4LWBY261bf8rre2gsH2pvPpSq779m8QpyMw/exec",
     headers: { "Content-Type":"text/plain" ,
               // "Access-Control-Allow-Origin": "*",
   },
   
});

export default Api;