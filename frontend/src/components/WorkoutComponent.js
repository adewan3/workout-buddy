const WorkoutComponent = (props)=>{
    const {title, reps, load} = props.workout;
    return(
        <div className="workouts">
            <h3>{title}</h3>
            <p>Number of reps: {reps}</p>
            <p>Load in Kg: {load}</p>


        </div>
    );
}

export default WorkoutComponent;