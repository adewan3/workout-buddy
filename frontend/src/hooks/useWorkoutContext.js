import { useContext } from "react"
import { workoutContext } from "../context/WorkoutContext"

export const useWorkoutContext = ()=>{
    const context = useContext(workoutContext);

    if(!context){
        throw Error("useWorkoutContext should be used within the Provider tree");
    }

    return context;
}
