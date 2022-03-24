import { selectCourse } from "../actions"

var course_selected=new Object();
var professor_selected=new Object();
var assignment={course:new Object(),professor:new Object()}
var currentProfessor=new Object();
const currentCourse=new Object();
export default function(state={assignments:[]}, action) {
    switch(action.type){
        case 'COURSE_SELECTED': 
        if (action.payload==null)    
                {
                    return
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
      
        case 'PROFESSOR_SELECTED': 
        currentProfessor=action.payload
        course_selected=false
        professor_selected=true
        // return {         
        //     assignments:[...state.assignments,action.payload]
        // }



        default:
          
            return state;
    }
    return state;
}

