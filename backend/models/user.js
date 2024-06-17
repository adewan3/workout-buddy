const mongoose  = require('mongoose');
const bcrypt = require('bcrypt');
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
    const useremail = await this.findOne({email});
    console.log(useremail);
    if(useremail){
        throw new Error("Username already present");
    }
    const salt =  await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password,salt);
    const user = await this.create({ email, password: hashpassword });

    return user;
}

module.exports =  mongoose.model('user',userSchema);