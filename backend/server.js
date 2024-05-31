require('dotenv').config();
const mongoose = require('mongoose');

const express = require('express');
const workoutRoutes = require('./routes/workouts');

const app = express();

mongoose.connect(process.env.MONGOOSE_URI)
.then(()=>{
    console.log('DB connection is made');
    app.listen(process.env.PORT,()=> console.log('Listening to PORT',process.env.PORT));


}).catch((error)=>{
    console.log('Error in db connection');
    console.log(error);
})


//middleware
app.use(express.json());
//routes
//workouts
app.use('/api/workouts',workoutRoutes);




