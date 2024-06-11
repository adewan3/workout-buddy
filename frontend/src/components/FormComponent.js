import '../index.css';
import { useState } from 'react';

const FormComponent = () => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            // Make a Post call to /api/workouts
            const response = await fetch("/api/workouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            

            if (response.ok) {
                setFormData({
                    title: "",
                    reps: "",
                    load: 0
                });
                
            } else {
                
                console.log('Failed to add workout');
            }
        } catch (error) {
            console.log('Error while making a post request', error);
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
