const mongoose  = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: true
    }
})

userSchema.statics.signup = async function(email, password){

    if(!email && !password){
        throw new Error("All the fields are empty");
    }
    if(!validator.isEmail(email)){

        throw new Error("All the fields are empty");

    }
    if(!validator.isStrongPassword(password)){

        throw new Error("Password is not strong");
    }

    const useremail = await this.findOne({email});
    console.log(useremail);
    if(useremail){
        throw new Error("email already registered");
    }
    const salt =  await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password,salt);
    const user = await this.create({ email, password: hashpassword });

    return user;
}

module.exports =  mongoose.model('user',userSchema);