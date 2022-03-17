export function selectCourse(course){
    return {
        type: 'COURSE_SELECTED',
        payload: course
    }
}
export function selectProfessor(professor){
    return {
        type: 'PROFESSOR_SELECTED',
        payload: professor
    }
}

// If you had other action creators, just list them all
// one by one here.