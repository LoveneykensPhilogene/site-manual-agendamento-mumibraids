import Axios  from "axios";
 const Api=Axios.create({

     baseURL:"https://script.google.com/macros/s/AKfycbxgmSO1mUdJ_9t8YKz7B8xR98t2eav9MZXuWbYalfPJdW-aX5KF9iwcfS-7xAfj76TLmw/exec",
     headers: { "Content-Type":"text/plain" ,
               // "Access-Control-Allow-Origin": "*",
   },
   
});

export default Api;