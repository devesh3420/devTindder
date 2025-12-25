const express = require("express");
const app = express();
const connectDb = require("./config/database");
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();

        res.status(201).json({
            message: "User created successfully",
            data: user
        });
    } catch (error) {
        console.error(error);

        res.status(400).json({
            message: "Error creating user",
            error: error.message
        });
    }
});

// app.get("/adminData", async(req,res)=>{
//     const userId = (req.body.userId);
//     try{
//     const user =  await user.findById({userId});
//     res.send(user)
//     } catch(err){
//     res.status(401).send("something is wrong!!");
//     }
// })

app.delete("/user",async(req,res)=>{
    const userId = req.body.userId;

    try {
        const user = await User.findByIdAndDelete(userId);
        res.send("user successFully Delete");
    } catch (error) {
        res.status(401).send("something is wrong!!");
    }
})

app.patch("/user", async(req,res)=>{
    const userId = req.body.userId;
    const data = req.body;
try {
    await User.findByIdAndUpdate({_id:userId,data})
    res.send("data update sucsessfull")
} catch (error) {
    res.status(401).send("something is wrong!!");
}

})



// app.get("/feed", async(req,res)=>{
//     const userEmail = (req.body.emailId);
//     try{
//         const users = await User.findOne({emailId: userEmail});
//         if(users === 0){
//              res.status(401).send("something is wrong!!");
//         }
//      res.send(users)
//     }catch(err){
//       res.status(401).send("something is wrong!!");
//     }
// })

connectDb()
    .then(() => {
        console.log("Connected to database");
        app.listen(7777, () => {
            console.log("Server started on port 7777");
        });
    })
    .catch((err) => {
        console.error("Database connection failed:", err);
    });
