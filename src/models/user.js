const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    password : {
        type : String
    },
    age : {
        type:Number
    },
    gender : {
        type : String
    },
    emailId : {
         type : String
        },
        profilePic : {
            type :String,
            default : "https://www.freepik.com/free-vector/blue-circle-with-white-user_145857007.htm#fromView=keyword&page=1&position=1&uuid=97e1c586-c5fa-4f3f-b44c-9ab2135d63a6&query=Profile",
        },
    phoneNumber : {
        type : Number 
    }
})


module.exports = mongoose.model("User", userSchema);