// export default function() {
//     return [ 
//     {name: "Sudip Chakraborty"},
//     {name: "Ahana Roy Choudhury"},
//     {name: "Anurag Dasgupta"},
//     {name: "Dave Gibson"},
//     {name: "Chunlei Liu"},
//     {name: "Radu Paul Mihail"},
//     {name: "Krishnendu Roy"},
//     {name: "Krishnapriya Kottakkal Sugathan"},
//     {name: "Zhiguang Xu"},
// ];
// }
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
            // .filter(course=>
            //     course.sections>0)
            // .sort((course1, course2) => {
            //     return course1.id - course2.id;
            // });
    case "COURSE_SELECTED":
        console.log("hi")
        return state
        .map(professor=> {
             return (professor.name === action.currentProfessor.name)
            ? Object.assign({}, professor, {
                numCourses: professor.numCourses+1,credit:professor.credit+action.payload.hour
              })
            : professor;
        }
        
        )
            
    default:
        return state;
}
return state;
}
