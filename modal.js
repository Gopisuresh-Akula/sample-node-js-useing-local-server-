const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({


    UserName:{
        type:String,
        required:true
    },

    phonenumber:{
        type:String,
        required:true
    }


  

},  {versionKey: false, timestamps: true});


module.exports = mongoose.model("User", UserSchema);


    