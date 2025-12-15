const express = require("express");
const app = express();
const connectDb = require("./config/database")
const User = require("./models/user");


app.use(express.json());

app.post("/sinup",async(req,res)=>{

    const user = new User(req.body);
await user.save();
    res.send("data successfully Added!!!")
})


connectDb().then(()=>{
    console.log("connection connect to Db");
    app.listen(7777,()=>{
        console.log("server is start ......");
    })
}).catch((err)=>{
console.error("heare some problem to conncet Db -----"+ err);
})


