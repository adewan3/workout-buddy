//Business logic for user present here

const loginUser = (req,res) =>{
    res.send("Login page");

}

const signupUser = (req,res)=>{
    res.send("Sign Up Page");
}

module.exports = {
    loginUser,
    signupUser
}

