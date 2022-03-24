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
                        assignments:[...state.assignments,assignment].sort(function(a, b){  
                            var lastName1=a.professor.name
                            lastName1=lastName1.substring(lastName1.lastIndexOf(" "))
                            var lastName2=b.professor.name
                            lastName2=lastName2.substring(lastName2.lastIndexOf(" "))
                            if(lastName1 > lastName2) return 1;
                            if(lastName1 < lastName2) return -1;
                            return 0;
                        })
                }
        
            }
        return state
        }
        case 'ASSIGNMENT_SELECTED':
            {
            return{
                assignments:[...state.assignments.slice(0, action.index), ...state.assignments.slice(action.index + 1)],
            }
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
    
}
