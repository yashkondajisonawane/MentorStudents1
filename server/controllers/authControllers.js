const User=require('../models/user');
const {hashPassword,comparePassword}=require('../helpers/auth');

const test=(req,res) =>{
    res.json('test is working');
}

const registerUser=async(req,res) =>{
    try{
        const {name,email,password}=req.body;
        if(!name){
            return res.json({
                error:'name is required'
            })
        };
        const hashedPassword=await hashPassword(password);
        if(!password || password.length <6){
            return res.json({
                error:'password is required and it should be of at least length 6'
            })
        }
        const exist=await User.findOne({email});
        if(exist){
            return res.json({
                error:'email is already taken'
            })
        }
        const user=await User.create({
            name,
            email,
            password:hashedPassword
        })
        return res.json(user);
    }catch(error){
        console.log(error);
    }
}

const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.json({
                error:'no user found'
            });
        }
        const match=await comparePassword(password,user.password);
        if(match){
            return res.json('password match');
        }
    }catch(err){
        console.log(err);
    }
}

module.exports={
    test,
    registerUser,
    loginUser
}