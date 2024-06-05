import '../index.css';
import { Link } from 'react-router-dom';
import workoutImg from '../img/workout.svg';


const NavBar = ()=>{

    return(
        <div className="NavBar">

                <Link to="/">

                <h1>Workout Buddy</h1>
                <img src={workoutImg} alt='workoutImage'/>

                </Link>
                
            


        </div>
        
    );

}
export default NavBar;