var prfSelected=false
export function selectCourse(course,currentProfessor){
    return {
        type: 'COURSE_SELECTED',
        payload: course,prfSelected,currentProfessor
    }
}
export function selectProfessor(professor,professorSelected,hours){
    prfSelected=professorSelected
    return {
        type: 'PROFESSOR_SELECTED',
        payload: professor,hours
    }
}

// If you had other action creators, just list them all
// one by one here.