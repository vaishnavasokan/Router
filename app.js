var express = require("express");
var prdrouter=require("./Router/prdrouter")     // passing to router
var emprouter=require("./Router/emprouter")  
const app = express();

app.use("/prd",prdrouter);    //whenever a rqst is made, pass it to the router  
app.use("/emp",emprouter);  

app.set("view engine","ejs");
app.set("views","./src/views");

app.listen("8080",function()
{
    console.log("Server started.");
})

app.get("/",function(req,res)
{
    res.render("home");
    
})
