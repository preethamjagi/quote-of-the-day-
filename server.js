const express = require('express');
const axios = require('axios');
var app = express();
port= process.env.PORT || 5000;
app.set('views','VIEW');
app.set('view engine',"ejs");
app.get('/',(req,res)=> {
getA().then(received=>{ var result= received.data.contents.quotes;
        for(items in result)
        {   res.render("view",{
            quote:result[items].quote
            ,author: result[items].author
        })
        }
}).catch(err=>{ console.log(err)})
 

})
async function getA() {
const result = await axios.get("https://quotes.rest/qod");
return result;
}



app.listen(port, ()=>{console.log("server started")});