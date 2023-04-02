const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    }
})
mongoose.model("USER",UserSchema);
