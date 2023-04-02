const MongoClient = require('mongodb').MongoClient
const express = require('express');
const router = require('express').Router;
const app = express();
app.use(express.json());
var cors = require('cors');
const { TableSortLabel } = require('@material-ui/core');
const { Db } = require('mongodb');
app.use(cors());
app.get('/hii',(req,res) => {
    res.send("welcome to mongo db")
})
var database;
app.get('/railways',(req,res)=>{
    database.collection('railways').find({}).toArray((error,result)=>{
        res.send(result)
    })
})
app.get('/ships',(req,res)=>{
    database.collection('ships').find({}).toArray((error,result)=>{
        res.send(result)
    })
})
app.get('/airways',(req,res)=>{
    database.collection('airways').find({}).toArray((error,result)=>{
        res.send(result)
    })
})
app.get('/paymentdatas',(req,res) => {
    async function getPost() {
        try{
         const post = await database.collection('paymentdatas').find().sort({_id:-1});
         console.log(post)
         res.send(post);
        }
        catch(err){
            console.log(err)
        }
    }
    getPost()
})
app.listen(8080, () =>{
    MongoClient.connect('mongodb+srv://ijaas:ijaas@cluster0.httu3xq.mongodb.net/test',{useNewUrlParser:true},(error,result) => {
        if(error)
        {
            console.log(error)
        }
        database = result.db('test')
        console.log("Client Server is connected")
    })
})
