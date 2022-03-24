const initialState=[ 
    {name: "Sudip Chakraborty",numCourses:0,credit:0},
    {name: "Ahana Roy Choudhury",numCourses:0,credit:0},
    {name: "Anurag Dasgupta",numCourses:0,credit:0},
    {name: "Dave Gibson",numCourses:0,credit:0},
    {name: "Chunlei Liu",numCourses:0,credit:0},
    {name: "Radu Paul Mihail",numCourses:0,credit:0},
    {name: "Krishnendu Roy",numCourses:0,credit:0},
    {name: "Krishnapriya Kottakkal Sugathan",numCourses:0,credit:0},
    {name: "Zhiguang Xu",numCourses:0,credit:0},
]
export default function(state = initialState, action) {
switch (action.type) {
    case "PROFESSOR_SELECTED":
        return state
            .map(professor=> {
                return (professor.name === action.payload.name )
                    ? Object.assign({}, professor, {
                      })
                    : professor;
            })
    case "COURSE_SELECTED":
        return state
        .map(professor=> {
             return (professor.name === action.currentProfessor.name)
            ? Object.assign({}, professor, {
                numCourses: professor.numCourses+1,credit:professor.credit+action.payload.hour
              })
            : professor;
        }
        
        )
    case "ASSIGNMENT_SELECTED":
        return state
        .map(professor=> {
             return (professor.name === action.payload.professor.name)
            ? Object.assign({}, professor, {
                numCourses: professor.numCourses-1,credit:professor.credit-action.payload.course.hour
              })
            : professor;
        }
        
        )
            
    default:
        return state;
}
return state;
}
