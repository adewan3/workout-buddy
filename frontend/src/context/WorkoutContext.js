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
            return { ...state, workouts: state.workouts.map(w => w._id === action.payload._id ? action.payload : w) };
            
        
        case "SET_EDIT_WORKOUT":
            return { ...state, editWorkout: action.payload };
        
        case "CLEAR_EDIT_WORKOUT":
            return {...state,editWorkout:null};
        
        default:
            return state;

    }//swtich


}


const WorkoutContext = ({children})=>{

    const [state, dispatch] = useReducer(WorkoutReducer,{
        workouts:null,
        editWorkout: null
    });

    return(
        <workoutContext.Provider value={{...state, dispatch}}>

            {children}


        </workoutContext.Provider>
    );

}
export default WorkoutContext;