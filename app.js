const express = require("express");

const app = express();

app.use("/",(req,res)=>{
   res.send("hello check");
})

app.use("/hello",(req,res)=>{
    res.send('hello devesh ---->');
})






app.listen(9999,()=>{
    console.log("server create ------>");
})