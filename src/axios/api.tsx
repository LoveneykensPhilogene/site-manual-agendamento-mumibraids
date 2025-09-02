import Axios  from "axios";
 const Api=Axios.create({

     baseURL:"https://script.google.com/macros/s/AKfycbyDkNzXbi8Ulnr4emC4Gof0N0I5P7yvkgamDX8I8w6DIqslbXdJHeh4KqpWnF6KU5FJ2g/exec",
     headers: { "Content-Type":"text/plain" ,
               // "Access-Control-Allow-Origin": "*",
   },
   
});

export default Api;