# Project Name

Workout Buddy

## Description

A full stack application using MERN Stack

Backend Folder contains server.js file which is the starting file

API path --> /api/workouts

Routes --> workoutRoutes in the routes folder. Each route calls a method present in Controller folder

Controller --> Contains the business logic of the api

Model --> The schema is present in Models folder which makes use of mongoose ORM

Express --> This application makes use of Express framework for creating the REST API and communicating the backend and front end in JSON

CORS --> Is solved using proxy in the package.json file in the frontend folder

Context API --> State management solution for react

useContext --> is the hook used for statemanagment in this project

useReducer --> a hook used for statemanagement

To manage global state I have made use of useContext + useReducer here

Step 1. create a reducer function with state, action
Step 2. const [state, dispatch] = useReducer(reducer, initialstate);
Step 3. Need to make global state where both state and dispacth can be utilized from child components

bcrypt --> is the hashing technique used for signup
bcrypt is a two step process --> STEP 1. add salt to password , STEP 2. Add hash to the password+salt

## Installation

```bash
git clone https://github.com/adewan3/workout-buddy.git
npm install
```
