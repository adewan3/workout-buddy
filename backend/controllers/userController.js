//Business logic for user present here
const express = require("express");
const userSchema = require('../models/user');


const loginUser = (req,res) =>{
    res.send("Login page");

}

const signupUser = async (req,res)=>{

    const {email, password} = req.body;
    console.log(email);
    console.log(password);

    try{
        const user = await userSchema.signup(email, password);
       // await userSchema.create(user);
        console.log("User created");
        res.status(200).send(user);


        

    }catch(error){
        res.status(400).send({msg: error.message});
    }
    
}

module.exports = {
    loginUser,
    signupUser
}

