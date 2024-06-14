import { createContext, useReducer } from "react";

export const workoutContext = createContext();


const WorkoutReducer = (state, action)=>{



    

    switch(action.type){
        case "INIT":
            return{
                workouts:action.payload
            }
        case "ADD":
            return{
                workouts: [action.payload, ...state.workouts]
            }
            
            
        
        case "DELETE":
            return {
                

                workouts: state.workouts.filter(w => w._id !== action.payload) 

            }
            

        case "EDIT":
            break;
        
        default:
            return state;

    }//swtich


}


const WorkoutContext = ({children})=>{

    const [state, dispatch] = useReducer(WorkoutReducer,{
        workouts:null
    });

    return(
        <workoutContext.Provider value={{...state, dispatch}}>

            {children}


        </workoutContext.Provider>
    );

}
export default WorkoutContext;