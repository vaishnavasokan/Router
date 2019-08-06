var express = require("express");
const router =express.Router();

router.get("/",function(req,res)
{
    res.render('emp')
})

router.get("/new",function(req,res)
{
    res.send("new emp");
    //res.render("newprd")
})

router.get("/view",function(req,res)
{
    res.send("view emp");
})

router.get("/delete",function(req,res)
{
    res.send("delete emp");
})

router.get("/edit",function(req,res)
{
    res.send("edit emp");
})

module.exports=router;
