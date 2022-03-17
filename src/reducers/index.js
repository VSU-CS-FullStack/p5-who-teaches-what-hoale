import { combineReducers } from "redux";

import CoursesReducer from './reducer_courses';

const rootReducer = combineReducers({
    // our first state in Redux store - books
    courses: CoursesReducer
});

export default rootReducer;