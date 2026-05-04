import Axios  from "axios";
 const Api=Axios.create({

     baseURL:"https://script.google.com/macros/s/AKfycbwdTY0wAgYkqNJNAzobv_i7Cy4rgh7ESIlq5R825bAU2IcRMIb-N0MaOH9QrZTCe8Im/exec",
     headers: { "Content-Type":"text/plain" ,
                //"Access-Control-Allow-Origin": "*",
   },
   
});

export default Api;