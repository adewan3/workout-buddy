import { useEffect, useState } from "react";
import WorkoutComponent from "../components/WorkoutComponent";

const Home = ()=>{

    const [data, setData] = useState(null);
    const fetchAllData = async()=>{

        try{
            
            const response = await fetch("/api/workouts");
            const allData = await response.json();
            console.log(allData);

            if(response.ok){
                setData(allData);
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

            {
                data && data.map((workout)=>(
                    <WorkoutComponent workout={workout}/>
                ))
            }

            

           

        </div>
        
    );
}

export default Home;