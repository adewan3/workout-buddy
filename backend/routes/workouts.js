const express = require('express');
const workoutSchema = require('../models/workouts');

const route = express.Router();

//GET all workouts
route.get('/',async (req,res)=>{
    //res.status(200).json({msg:"Workouts page"});
    const records = await workoutSchema.find();
    res.status(200).send(records);
})

//GET a single workout
// route.get('/:id',(req,res)=>{
//     const id = req.params;
    
// })

//POST a workout
route.post('/',async (req,res)=>{
    const {title, reps, load} = req.body;
    try{
        const newRecord = {
            title,
            reps,
            load
        }

        
        await workoutSchema.create(newRecord);
        console.log('record created');
        res.status(200).send(newRecord);




    }catch(error){

        console.log("Error in adding the record");
        res.status(400).send({msg: error.message});

    }

})
//PUT request
route.put('/:id',async (req,res)=>{
    const {title,reps, load} = req.body;
    const id = req.params.id;
    try{
        const data = await workoutSchema.findById(id);
        if(!data){
            console.log("No such data present");
            res.status(400).send({msg:"No record woith this id present"});
            
        }
        data.title = title;
        data.reps = reps;
        data.load = load;
        await data.save();
        res.status(200).send(data);

    }catch(error){
        res.status(400).send({msg:error.message});
    }
    
    
    
})

//DELETE a workout
route.delete('/:id',async (req,res)=>{
    
    try{

        const id = req.params.id;
    
        const data = await workoutSchema.findById(id);
        if(!data){
            res.status(400).send({msg:"No such Id present"});
        }
        await workoutSchema.findByIdAndDelete(id);
        res.status(200).send({ msg: "Record deleted successfully" });

    }catch(error){
        res.status(400).send({msg:error.message});

    }
    

    
})

module.exports = route;