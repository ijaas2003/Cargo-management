const express = require('express');
const { default: mongoose, set } = require('mongoose');
const USER = mongoose.model("USER")
const router = express.Router();
const bcrypt = require('bcrypt');
const Railway = mongoose.model("Railways");
const AirWay = mongoose.model("Airways")
const Ship = mongoose.model("Ships")
const PaymentData = mongoose.model("PaymentDatas")
const Reg3 = /^[0-9]*$/;
const Reg = /^[A-Za-z]*$/;

const Reg1 = /^[0-9]*[A-Za-z]$/
const regex = /^[A-Za-z]*[0-9]*[@][A-Za-z]*[\.][A-Za-z]*$/;
const symbol = /^[-]*[0-9]$/;
router.post('/signup',(req,res) => {
    const {Name,Email,Password} = req.body;
    if(!Name || ! Email || !Password){
        return res.status(422).json({error:"Please add the fields🤥😩"})
    }
    if(!Reg.test(Name))
    {
        return res.status(422).json({error:"Name is not valid name🤥😩"})
    }
    if(!regex.test(Email))
    {
        return res.status(422).json({error:"Email is not valid name🤥😩"})
    }
    USER.findOne({$or:[{Email:Email}]}).then((savedUser) => {
        if(savedUser){
            return res.status(422).json({error:"User already exist🤥😩"})
        }
        
        bcrypt.hash(Password, 12).then((Hasedpassword) => {
            const user = new USER({
                Name,
                Email,
                Password:Hasedpassword,
            })
            user.save()
                .then(user => {res.json( {message: "Registered successfully🤩"})})
                .catch(err => {console.log(err)})
        })
    })
})
router.post('/adminlogin',(req,res)=>{
    const {UserName ,Password} = req.body
    if(!UserName || !Password){
        return res.status(422).json({error:"please add email and password🤥😩"})
    }
    USER.findOne({UserName:UserName}).then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error:"you dont have account please signin🤥😩"})
        }
        bcrypt.compare(Password,savedUser.Password).then((match)=>{
            if(match){
                return res.status(200).json
                ({
                    message:"Login Successfully🤩"
                })
            }
            else{
                return res.status(422).json
                ({error:"Invalid password🤥😩"})
            }
        })
        .catch(err=>console.log(err))
    })
})
router.post('/login',(req,res)=>{
    const {Email ,Password} = req.body
    if(!Email || !Password){
        return res.status(422).json({error:"please add email and password🤥😩"})
    }
    USER.findOne({Email:Email}).then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error:"you dont have account please signin🤥😩"})
        }
        if(!regex.test(Email)){
            return res.status(422).json({error:"its not a valid email🤥😩"})
        }
        bcrypt.compare(Password,savedUser.Password).then((match)=>{
            if(match){
                return res.status(200).json
                ({
                    message:"Login Successfully🤩"
                })
            }
            else{
                return res.status(422).json
                ({error:"Invalid password🤥😩"})
            }
        })
        .catch(err=>console.log(err))
    })
})
module.exports = router;
router.post('/railways',(req, res) => {
    const { Name, NickName, Phone, Email,Destination,Dates,Text,KG} = req.body;
    if(!Name || !NickName || !Phone || !Email || !Destination || !Dates || !Text || !KG){
        return res.status(422).json({error:"please fill the field🤥😩"})
    }
    const Desti = JSON.stringify(Destination);
    const validate = Desti.slice(23,-2)
    console.log(validate);
    const Phonelen = Phone.length;
    const Datess = new Date();
    const day = Datess.getDate();
    const month = Datess.getMonth()+1;
    const year = Datess.getFullYear();
    console.log(`${day}-${month}-${year}`);
    const currentYear = Dates.slice(0,4);
    const currentMonth = Dates.slice(5,7);
    const currentDate = Dates.slice(8,10);
    console.log(currentDate);
    console.log(currentYear);
    console.log(currentMonth);
    const regex = /^[A-Za-z]*[0-9]*[@][A-Za-z]*[\.][A-Za-z]*$/;
    if(currentYear>=year){
        if(currentMonth>=month || currentYear>=year){
            console.log('success month');
            if(currentDate>day || currentMonth>=month){
                console.log('success day')
            }
            else{
                return res.status(422).json({error:"please choose correct day🤥😩"})
            }
        }
        else{
            return res.status(422).json({error:"please select correct month🤥😩"})
        }
    }
    else{
        return res.status(422).json({error:"please choose correct year🤥😩"})
    }
    Railway.findOne({Email:Email}).then(
        (UserSavedData) => {
            if(UserSavedData){
                return res.status(422).json({error:"Order can already Saved from the user🤥😩"})
            }
            if(Reg1.test(Name)){
                return res.status(422).json({error:"Please enter the valid name🤥😩"})
            }
            if(!Reg.test(NickName)){
                return res.status(422).json({error:"Please enter the valid Nick name🤥😩"})
            }
            if(Reg.test(Phone)){
                return res.status(422).json({error:"Please enter the valid phoneNumber Number🤥😩"})
            }
            if(!regex.test(Email))
            {
                return res.status(422).json({error:"Email is not valid name🤥😩"})
            }
            if(!Phonelen==10){
                return res.status(422).json({error:"Please enter 10 Digit PhoneNumber🤥😩"})
            }
            if(Reg.test(KG)){
                return res.status(422).json({error:"Please enter the valid Number🤥😩"})
            }
            if(symbol.test(KG)){
                return res.status(422).json({error:"Please enter the valid Number🤥😩"})
            }
            if(KG>3000){
                return res.status(422).json({error:"Don't export more than 10000🤥😩"})
            }
            const Railways = new Railway({
                Name:Name,
                NickName:NickName,
                Phone:Phone,
                Email:Email,
                Destination:validate,
                Dates:Dates,
                Text:Text,
                KG:KG,
            })
            Railways.save()
            .then(Railways=>{
                res.json({message:"Saved Successfully🤩🔥"})
            }).catch(err =>{console.log(err);})
        }
    )
})
router.post('/airways',(req, res) => {
    const { Name, NickName, Phone, Email,Destination,Dates,Text,KG,Service} = req.body;
    if(!Name || !NickName || !Phone || !Email || !Destination || !Dates || !KG || !Text){
        return res.status(422).json({error:"please fill the field"})
    }
    const Phonelen = Phone.length;
    console.log(Phonelen)
    AirWay.findOne({Email:Email}).then(
        (UserSavedData) => {
        const Desti = JSON.stringify(Destination);
        const validate = Desti.slice(23,-2);
        console.log(validate);
        const Datess = new Date();
        const day = Datess.getDate();
        const month = Datess.getMonth()+1;
        const year = Datess.getFullYear();
        console.log(`${day}-${month}-${year}`);
        const currentYear = Dates.slice(0,4);
        const currentMonth = Dates.slice(5,7);
        const currentDate = Dates.slice(8,10);
        console.log(currentDate);
        console.log(currentYear);
        console.log(currentMonth);
        const regex = /^[A-Za-z]*[0-9]*[@][A-Za-z]*[\.][A-Za-z]*$/;
        if(currentYear>=year){
            if(currentMonth>=month || currentYear>year){
                console.log('success month');
                if(currentDate>=day ||  currentMonth<month){
                    console.log('success day')
                }
                else{
                    return res.status(422).json({error:"please choose correct day🤥😩"})
                }
            }
            else{
                return res.status(422).json({error:"please select correct month🤥😩"})
            }
        }
        else{
            return res.status(422).json({error:"please choose correct year🤥😩"})
        }
            
            if(UserSavedData){
                return res.status(422).json({error:"Order can already Saved from the user🤥😩"})
            }
            if(!Reg.test(Name)){
                return res.status(422).json({error:"Please enter the valid name🤥😩"})
            }
            if(!Reg.test(NickName)){
                return res.status(422).json({error:"Please enter the valid Nick name🤥😩"})
            }
            if(!regex.test(Email))
            {
                return res.status(422).json({error:"Email is not valid name🤥😩"})
            }
            if(Reg.test(Phone)){
                return res.status(422).json({error:"Please enter the valid phoneNumber Number🤥😩"})
            }
            if(Reg1.test(Phone)){
                return res.status(422).json({error:"Please enter the valid phoneNumber Number🤥😩"})
            }
            if(!Phonelen==10){
                return res.status(422).json({error:"Please enter 10 Digit PhoneNumber🤥😩"})
            }
            if(Reg.test(KG)){
                return res.status(422).json({error:"Please enter the valid Number🤥😩"})
            }
            if(KG>3000){
                return res.status(422).json({error:"Don't export more than 10000🤥😩"})
            }
            const Airways = new AirWay({
                Name:Name,
                NickName:NickName,
                Phone:Phone,
                Email:Email,
                Destination:validate,
                Dates:Dates,
                Text:Text,
                KG:KG,
                Service:Service,
            })
            Airways.save()
            .then(Airways=>{
                res.json({message:"Saved Successfully🤩🔥"})
            }).catch(err =>{console.log(err);})
        }
    )
    if(Service){
        AirWay.findOne({Email:Email}).then(
            (user)=>{
                const Airways = new AirWay({
                    Service:Service,
                })
               Airways.save().then(data => {
                res.json({message:"store success"})
               })
              const post = new AirWay.updateOne({'Email':Email},{$set:{'Payment':'paied'}});
              console.log(post)
            }
        )
    }
})
router.post('/ship',(req, res) => {
    const { Name, NickName, Phone, Email,Destination,Dates,Text,KG} = req.body;
    if(!Name || !NickName || !Phone || !Email || !Destination || !Dates || !Text || !KG){
        return res.status(422).json({error:"please fill the field🤥😩"})
    }
    const Desti = JSON.stringify(Destination);
    const validate = Desti.slice(23,-2)
    console.log(validate);
    const regex = /^[A-Za-z]*[0-9]*[@][A-Za-z]*[\.][A-Za-z]*$/;
    const Phonelen = Phone.length;
    Ship.findOne({Email:Email}).then(
        (UserSavedData) => {
            
            const Datess = new Date();
            const day = Datess.getDate();
            const month = Datess.getMonth()+1;
            const year = Datess.getFullYear();
            console.log(`${day}-${month}-${year}`);
            const currentYear = Dates.slice(0,4);
            const currentMonth = Dates.slice(5,7);
            const currentDate = Dates.slice(8,10);
            console.log(currentDate);
            console.log(currentYear);
            console.log(currentMonth);
        if(currentYear>=year){
            if(currentMonth>=month ||  currentYear>=year){
                console.log('success month');
                if(currentDate>day || currentMonth<=month){
                    console.log('success day')
                }
                else{
                    return res.status(422).json({error:"please choose correct day🤥😩"})
                }
            }
            else{
                return res.status(422).json({error:"please select correct month🤥😩"})
            }
        }
        else{
             return res.status(422).json({error:"please choose correct year🤥😩"})
        }
            if(UserSavedData){
                return res.status(422).json({error:"Order can already Saved from the user🤥😩"})
            }
            if(!Reg.test(Name)){
                return res.status(422).json({error:"Please enter the valid name🤥😩"})
            }
            if(!regex.test(Email))
            {
                return res.status(422).json({error:"Email is not valid name🤥😩"})
            }
            if(!Reg.test(NickName)){
                return res.status(422).json({error:"Please enter the valid Nick name🤥😩"})
            }
            if(Reg.test(Phone)){
                return res.status(422).json({error:"Please enter the valid phoneNumber Number🤥😩"})
            }
            if(Phonelen!=10){
                return res.status(422).json({error:"Please enter 10 Digit PhoneNumber🤥😩"})
            }
            if(Reg.test(KG)){
                return res.status(422).json({error:"Please enter the valid Number🤥😩"})
            }
            if(KG>3000){
                return res.status(422).json({error:"Don't export more than 10000🤥😩"})
            }
            const Ships = new Ship({
                Name:Name,
                NickName:NickName,
                Phone:Phone,
                Email:Email,
                Destination:validate,
                Dates:Dates,
                Text:Text,
                KG:KG,
            })
            Ships.save()
            .then(Ships=>{
                res.json({message:"Saved Successfully🤩🔥"})
            }).catch(err =>{console.log(err);})
        }
    )
})
router.post('/PaymentDatas',(req,res) => {
    const { Service } = req.body;
    const Datas = new PaymentData({
        Service:Service,
    })
    Datas.save()
    .then((data) => {
       console.log("Success");
    }).then(mess => {
        res.json({message:"success"})
    })
    .catch(err => {
        console.log(err)
    })
});
