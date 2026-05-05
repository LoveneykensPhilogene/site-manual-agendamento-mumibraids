import Axios  from "axios";

 const Api=Axios.create({

     baseURL:"https://script.google.com/macros/s/AKfycbykS0THbP9zLjG7D6_HZHNl80_ejy3VS8jWnUtdRGbWCx7YeLdxPXyksEU5bkU6qq4hTA/exec",
     headers: { "Content-Type":"text/plain" ,
                //"Access-Control-Allow-Origin": "*",
   },
   
});

export default Api;