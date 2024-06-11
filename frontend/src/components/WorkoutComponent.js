import deleteImg from '../img/trash.svg';
import editImg from '../img/edit.svg';
import starImg from '../img/star-regular.svg';
import '../index.css';
import { useState } from 'react';

const WorkoutComponent = (props)=>{
    const {title, reps, load} = props.workout;
    const [star, setStar] = useState(false);

    const handleStar = ()=>{
        setStar(!star);

        

    }
    return(
        <div className="workouts">
            <div className="workouts-description">
            <h3>{title}</h3>
            <p>Number of reps: {reps}</p>
            <p>Load in Kg: {load}</p>

            </div>

            <div className="workouts-button">
               
               <button className='delete'>
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