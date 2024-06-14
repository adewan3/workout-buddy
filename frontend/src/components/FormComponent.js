import '../index.css';
import {useEffect, useState } from 'react';
import {useWorkoutContext} from '../hooks/useWorkoutContext';

const FormComponent = () => {
    const {editWorkout, dispatch} = useWorkoutContext();
    const [formData, setFormData] = useState({
        title: "",
        reps: "",
        load: 0
    });

    useEffect(()=>{
        if(editWorkout){

            setFormData(editWorkout);

        }
        

    },[editWorkout])
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAdd = async (newData)=>{


        try {
            // Make a Post call to /api/workouts
            const response = await fetch("/api/workouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newData)
            });

            

            if (response.ok) {
                console.log("Data Added Successfully");
                
            } else {
                
                console.log('Failed to add workout');
            }
        } catch (error) {
            console.log('Error while making a post request', error);
        }


    }//handelAdd

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        if(editWorkout){
            //create a put request
            try{
                const response = await fetch(`/api/workouts/${editWorkout._id}`,{
                    method:"PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)

                });

                if (response.ok) {
                    console.log("Data Updated Successfully");
                    const data = await response.json();
                    dispatch({ type: "EDIT", payload: data });
                    dispatch({type:"CLEAR_EDIT_WORKOUT"})
                    setFormData({
                        title: "",
                        reps: "",
                        load: 0
                    });
                } else {
                    console.log('Failed to update workout');
                }

            }catch(error){
                console.log("Error",error);

            }

        }//if
        else{

            try{
                handleAdd(formData);
                dispatch({type:"ADD", payload:formData});
                setFormData({
                    title: "",
                    reps: "",
                    load: 0
                });
    
            }catch(error){
                console.log("error while submitting data");
    
            }
            

        }//else

        
                
            
       
    };

    return (
        <form className="formComponent" onSubmit={handleSubmit}>
            <h2>Add a new Workout</h2>
            <label>New title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            <label>Number of reps</label>
            <input type="text" name="reps" value={formData.reps} onChange={handleChange} required />
            <label>Load in Kg</label>
            <input type="number" name="load" value={formData.load} onChange={handleChange} required />
            <button type="submit">{editWorkout?"UPDATE WORKOUT":"ADD WORKOUT"}</button>
            
        </form>
    );
}

export default FormComponent;
