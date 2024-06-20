//Business logic for user present here
const express = require("express");
const userSchema = require('../models/user');
const jwttoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');



const createToken = (_id)=>{
    return jwttoken.sign({_id}, process.env.TOKEN_SECRET, { expiresIn: '1d' });

}
const loginUser = async (req,res) =>{
    //console.log(require('crypto').randomBytes(64).toString('hex'));
    const {email, password} = req.body;
    try{
        const user = await userSchema.login(email, password);
        const token = createToken(user._id);  
        res.status(200).json({email, token});
        

    }catch(error){
        res.status(404).send({msg:error.message});
    }
    




}

const signupUser = async (req,res)=>{

    const {email, password} = req.body;
    console.log(email);
    console.log(password);

    try{
        const user = await userSchema.signup(email, password);
       // await userSchema.create(user);
        console.log("User created");

      // Once the user is created get the token
        const token = createToken(user._id);  
        res.status(200).json({email, token});


        

    }catch(error){
        res.status(400).send({msg: error.message});
    }
    
}

module.exports = {
    loginUser,
    signupUser
}

