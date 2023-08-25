const express=require('express');
const dotenv=require('dotenv').config();
const cors=require('cors');
const {mongoose}=require('mongoose');

const app=express();
app.use(express.json());
const url=process.env.MONGO_URL;




// mongoose.connect("mongodb+srv://rajsonawane:raj_1199@cluster0.15brkbh.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true })
// .then(()=> console.log('database is connected'))
// .catch((err)=> console.log('database is not conneted',err));

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('database is connected'))
.catch((err)=> console.log('database is not conneted',err));

const port=8000;
app.use('/',require('./routes/authRouters'));

app.listen(port,() =>{
    // console.log(dotenv);
    console.log(`you are running on ${port}`);
})