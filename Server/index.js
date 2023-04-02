const express = require('express');
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const url = "mongodb+srv://ijaas:ijaas@cluster0.httu3xq.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;
const Passport = require("passport");
const cookieSession = require("cookie-session");
const data = require('./signupmodel/data.js');
//const PassportSetup = require('./passport');


dotenv.config();
const cors = require("cors");
app.use(cors())
app.use(express.urlencoded({extended:true}))
require('./signupmodel/Forms')
require('./signupmodel/Signup');
app.use(express.json());
app.use(require('./keys'))
mongoose.connect(url);
require('./Admin');
mongoose.connection.on("connected", ()=>{
    console.log("DataBase connected sucessfully");
});
mongoose.connection.on("error",()=>{
    console.log("not connected");
});
app.listen(PORT,"localhost", () =>{
    console.log("server is running in 4000");
})

app.use(cors({
    origin:"http://localhost:3000/login",
    methods:"GET,POST,PUT,DELETE",
    credentials:true,
}))
require('./Pdf')