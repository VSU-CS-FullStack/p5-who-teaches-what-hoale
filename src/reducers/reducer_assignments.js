import { selectCourse } from "../actions"

var course_selected=false;
var professor_selected=false;
var assignment={course:new Object(),professor:new Object()}
var currentProfessor=new Object();
var currentCourse=new Object();
export default function(state={assignments:[]}, action) {
    switch(action.type){
        case 'COURSE_SELECTED': 
        {
            if (action.payload==null)    
            {
                return state
            }  
            else if (professor_selected)
            {       
                course_selected=true
                assignment={course:action.payload,professor:currentProfessor}
                return { 
                // assignments:[...state.assignments,action.payload]
                assignments:[...state.assignments,assignment]
                }
        
            }
        return state
        }
        case 'PROFESSOR_SELECTED': 
        {
            currentProfessor=action.payload
            course_selected=false
            professor_selected=true
            
        }
      
        default:
          
            return state;
    }
    return state;
}

