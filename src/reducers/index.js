import { combineReducers } from "redux";

import CoursesReducer from './reducer_courses';
import ProfessorsReducer from './reducer_professors'

import ActiveCourseReducer from './reducer_active_course';
import ActiveProfessorReducer from './reducer_active_professor'

import AssignmentsReducer from './reducer_assignments'
const rootReducer = combineReducers({
    // our first state in Redux store - books
    courses: CoursesReducer, 
    professors: ProfessorsReducer,
    activeCourse:ActiveCourseReducer,
    activeProfessor:ActiveProfessorReducer,
    assignments: AssignmentsReducer
});

export default rootReducer;