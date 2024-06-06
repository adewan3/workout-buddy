import deleteImg from '../img/trash.svg';
import editImg from '../img/edit.svg';
import '../index.css';

const WorkoutComponent = (props)=>{
    const {title, reps, load} = props.workout;
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



            </div>
            


        </div>
    );
}

export default WorkoutComponent;