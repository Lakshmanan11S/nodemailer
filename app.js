const  nodemailer = require ('nodemailer');
const express = require ('express');
const PORT = 7500;
const bodyparser = require ('body-parser')
const app = express();
app.use(express.json())
require ('dotenv').config()
app.use(bodyparser.json())

const transporter = nodemailer.createTransport({
    service:'gmail',
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:process.env.USER_GMAIL,
        pass:process.env.USER_PASS
    }

});



app.post('/newmail',(req,res)=>{
const mailoption ={
    from:process.env.USER_GMAIL,
    to:req.body.to,
    subject:req.body.subject,
    text:req.body.text,

};


hfg;

  transporter.sendMail(mailoption,function(error,info){
    console.log("in",info)
    if(error){
        console.log(error);
        res.status(500).json({message:'error',error})
    }else{
        console.log('email send:',info.response)
        res.status(200).json({message:'mail send successfully'})
    }
})})
app.listen(PORT,()=>
    console.log('server is running on',PORT))

