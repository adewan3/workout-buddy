import { useEffect } from "react";
import WorkoutComponent from "../components/WorkoutComponent";
import FormComponent from '../components/FormComponent';
// import { workoutContext } from "../context/WorkoutContext";
import {useWorkoutContext} from '../hooks/useWorkoutContext';


const Home = ()=>{
    const {workouts, dispatch} = useWorkoutContext();
    //const [data, setData] = useState(null);
    const fetchAllData = async()=>{

        try{
            
            const response = await fetch("/api/workouts");
            const allData = await response.json();
            console.log(allData);

            if(response.ok){
                //setData(allData);
                dispatch({type:"INIT", payload: allData});
            }

        }catch(error){
            console.log('Error while fetching data');
        }

    }

    useEffect(()=>{

        fetchAllData();
        
    },[]);

    return(
        <div className="home">

            <div className="workouts-container">

            {
                workouts && workouts.map((workout, index)=>(
                    <WorkoutComponent workout={workout} key={index}/>
                ))
            }


            </div>

            

            <FormComponent/>

            

           

        </div>
        
    );
}

export default Home;