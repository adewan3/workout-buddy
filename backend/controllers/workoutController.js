const express = require('express');
const workoutSchema = require('../models/workouts');

//GET all workouts
const getAllWorkouts = async(req,res)=>{

    try{

        const records = await workoutSchema.find();
        if(!records){
            res.status(400).send({msg:"No such data present!"});
        }
        res.status(200).send(records);



    }catch(error){
        res.status(400).send({msg:error.message});
    }
    
}

//GET a single workout

const getSingleWorkout = async(req,res)=>{
    const id = req.params.id;
    try{
        const data = await workoutSchema.findById(id);
        if(!data){
            res.status(400).send({msg:"No such workout with this Id"});
            
        }
        res.status(200).send(data);


    }catch(error){
        res.status(400).send({msg:error.message});
    }
}

// create a workout

const createWorkout = async(req,res)=>{
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
}
//PUT req on workout
const updateWorkout = async (req,res)=>{

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

}

const deleteWorkout = async (req,res)=>{
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
}

module.exports = {
    getAllWorkouts,
    getSingleWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}