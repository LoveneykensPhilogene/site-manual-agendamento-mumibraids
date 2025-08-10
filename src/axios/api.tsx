import Axios  from "axios";
 const Api=Axios.create({

     baseURL:"https://script.google.com/macros/s/AKfycbwLZuo01xajKo_GBEoRlqnTKh5Uw3mvWM-if8x4Xlzdi8NNfCwoXpspow0jZbzmuwtAMQ/exec",
     headers: { "Content-Type":"text/plain" ,
               // "Access-Control-Allow-Origin": "*",
   },
   
});

export default Api;