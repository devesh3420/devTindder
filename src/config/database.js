const mongoose = require("mongoose");

const connectDb = async () =>{
    await mongoose.connect("mongodb+srv://vnsdev:9QwKCizLP70sOsDY@vnsdev.ljpqsj6.mongodb.net/devTinder")
}

module.exports = connectDb;
