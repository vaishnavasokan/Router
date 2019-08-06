var express = require("express");
const router = express.Router(); // creating router

var prod_arr =[{name:"prod1",price:300,quantity:1},{name:"prod2",price:250,quantity:2},
                {name:"prod3",price:150,quantity:1}];

router.get("/",function(req,res)
{
    res.render('prds')
})

router.get("/new",function(req,res)
{
    //res.send("new prod");
    res.render("newprod")
})

router.get("/view",function(req,res)
{
    res.render("viewprod",{prod: prod_arr});
})

router.get("/delete",function(req,res)
{
    res.render("removeprod");
})

router.get("/edit",function(req,res)
{
    res.send("edit prod");
})

module.exports=router;