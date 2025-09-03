import Axios  from "axios";
 const Api=Axios.create({

     baseURL:"https://script.google.com/macros/s/AKfycbw5aacUPxJq3O2DxBQTZ-99mggR21jWACk3KvEDLVjX_gE9jG0g2ofWgkeEVdtsUCx1eg/exec",
     headers: { "Content-Type":"text/plain" ,
               // "Access-Control-Allow-Origin": "*",
   },
   
});

export default Api;