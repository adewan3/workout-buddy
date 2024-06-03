const express = require('express');
//const workoutSchema = require('../models/workouts');
const {getAllWorkouts, getSingleWorkout, createWorkout, updateWorkout, deleteWorkout} = require('../controllers/workoutController');

const route = express.Router();

//GET all workouts
route.get('/',getAllWorkouts);

//GET a single workout
route.get('/:id',getSingleWorkout);

//POST a workout
route.post('/',createWorkout);
//PUT request
route.put('/:id',updateWorkout);

//DELETE a workout
route.delete('/:id',deleteWorkout);

module.exports = route;