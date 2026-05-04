import Axios  from "axios";

 const Api=Axios.create({

     baseURL:"https://script.google.com/macros/s/AKfycbwIpmGg9_nNpEeaR5gFUemlfghSodLPbEZVh3EWsDNIRiZ_qMSOFMNBZKMQX3CeT0CGqA/exec",
     headers: { "Content-Type":"text/plain" ,
                //"Access-Control-Allow-Origin": "*",
   },
   
});

export default Api;