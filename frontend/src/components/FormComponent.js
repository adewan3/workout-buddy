import '../index.css';
import {useState } from 'react';
import {useWorkoutContext} from '../hooks/useWorkoutContext';

const FormComponent = () => {
    const {workouts, dispatch} = useWorkoutContext();
    const [formData, setFormData] = useState({
        title: "",
        reps: "",
        load: 0
    });
    

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
            <button type="submit">Add a Workout</button>
            
        </form>
    );
}

export default FormComponent;
