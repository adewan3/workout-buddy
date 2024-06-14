import deleteImg from '../img/trash.svg';
import editImg from '../img/edit.svg';
import starImg from '../img/star-regular.svg';
import '../index.css';
import { useContext, useState } from 'react';
import { workoutContext } from '../context/WorkoutContext';
import { useWorkoutContext } from '../hooks/useWorkoutContext';

const WorkoutComponent = (props)=>{
    const {_id, title, reps, load} = props.workout;
    const [star, setStar] = useState(false);
    const {dispatch} = useWorkoutContext();

    const handleDel = async()=>{
        try{

            const response = await fetch(`/api/workouts/${_id}`,{
                method: "DELETE",
    
    
            });
            
            const json = await response.json();

            if(response.ok){
                console.log("Workout Deleted");
                dispatch({type: "DELETE", payload: _id});
            }
            else{
                console.log("Failed to delete the workout");
            }

        }catch(error){

            console.log("Error", error);

        }
    }

    const handleStar = ()=>{
        setStar(!star);

        

    }
    return(
        <div className="workouts">
            <div className="workouts-description" key={_id}>
            <h3>{title}</h3>
            <p>Number of reps: {reps}</p>
            <p>Load in Kg: {load}</p>

            </div>

            <div className="workouts-button">
               
               <button className='delete' onClick={handleDel}>
                <img src={deleteImg} alt='deleteImage'/>
               </button>

               <button className='edit'>
                <img src={editImg} alt='editImage'/>
               </button>

               <button className='star' onClick={handleStar} style={{backgroundColor: star?'goldenrod' : 'transparent'}}>
                <img src={starImg} alt='starImage'/>
               </button>



            </div>
            


        </div>
    );
}

export default WorkoutComponent;