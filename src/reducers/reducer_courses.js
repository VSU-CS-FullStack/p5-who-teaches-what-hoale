export default function() {
    return [ 
        {id: 1000, name: "Introduction to Microcomputers and Applications", hour: 3,sections:1},
        {id: 1010, name: "Algorithmic Problem Solving", hour: 3,sections:3},
        {id: 1301, name: "Principles of Programming I",hour:4,sections:3},
        {id: 1302, name: "Princicples of Programming II",hour:4,sections:2},
        {id: 1340, name: "Computing for Scientists",hour:3,sections:1},
        {id: 2620, name: "Discrete Structures", hour: 3,sections:1},
        {id: 3101, name: "Computer Organization", hour: 3,sections:1},
        {id: 3340, name: "Web Programming",hour:3,sections:1},
        {id: 3410, name: "Data Structures",hour:3,sections:1},
        {id: 3520, name: "Algorithms",hour:3,sections:1},
        {id: 4121, name: "Data Communications and Networks I",hour:3,sections:1},
        {id: 4321, name: "Software Engineering I", hour:3,sections:1},
        {id: 4330, name: "Theory of Programming Language",hour:3,sections:1},
        {id: 4345, name: "Operating Systems",hour:3,sections:1},
        {id: 4500, name: "Formal Languages and Automata Theory", hour:3,sections:1},
        {id: 4721, name: "Database Design I",hour:3,sections:1},
        {id: 4820, name: "Artificial Intelligence",hour:3,sections:1},
        {id: 4830, name: "Computer Graphics", hour:3,sections:1},
        {id: 4840, name: "Full Stack Web Programming",hour:3,sections:1},
        {id: 4900, name: "Senior Seminar",hour:3,sections:1},
        {id: 4990, name: "Topics in Computer Science", hour:3,sections:2},
];
}
// const initialState=[
//     {id: 1000, name: "Introduction to Microcomputers and Applications", hour: 3,sections:1},
//         {id: 1010, name: "Algorithmic Problem Solving", hour: 3,sections:3},
//         {id: 1301, name: "Principles of Programming I",hour:4,sections:3},
//         {id: 1302, name: "Princicples of Programming II",hour:4,sections:2},
//         {id: 1340, name: "Computing for Scientists",hour:3,sections:1},
//         {id: 2620, name: "Discrete Structures", hour: 3,sections:1},
//         {id: 3101, name: "Computer Organization", hour: 3,sections:1},
//         {id: 3340, name: "Web Programming",hour:3,sections:1},
//         {id: 3410, name: "Data Structures",hour:3,sections:1},
//         {id: 3520, name: "Algorithms",hour:3,sections:1},
//         {id: 4121, name: "Data Communications and Networks I",hour:3,sections:1},
//         {id: 4321, name: "Software Engineering I", hour:3,sections:1},
//         {id: 4330, name: "Theory of Programming Language",hour:3,sections:1},
//         {id: 4345, name: "Operating Systems",hour:3,sections:1},
//         {id: 4500, name: "Formal Languages and Automata Theory", hour:3,sections:1},
//         {id: 4721, name: "Database Design I",hour:3,sections:1},
//         {id: 4820, name: "Artificial Intelligence",hour:3,sections:1},
//         {id: 4830, name: "Computer Graphics", hour:3,sections:1},
//         {id: 4840, name: "Full Stack Web Programming",hour:3,sections:1},
//         {id: 4900, name: "Senior Seminar",hour:3,sections:1},
//         {id: 4990, name: "Topics in Computer Science", hour:3,sections:2},

// ]
// export default function(state = initialState, action) {
//     switch (action.type) {
//         case "COURSE_SELECTED":
//             return state
//                 .map(course => {
//                     return course.id === action.payload.id
//                         ? Object.assign({}, course, {
//                                 sections: course.sections-1
//                           })
//                         : course;
//                 })
//                 .slice()
//                 .sort((course1, course2) => {
//                     return course1.id - course2.id;
//                 });
    
//         default:
//             return state;
//     }
//     return state;
// }
// export default function(state = initialState, action) {
//     switch (action.type) {
//         case "BOOK_SELECTED":
//             return state
//                 .map(book => {
//                     return book.title === action.payload.title
//                         ? Object.assign({}, book, {
//                                 numberOfClicks: book.numberOfClicks + 1
//                           })
//                         : book;
//                 })
//                 .slice()
//                 .sort((book1, book2) => {
//                     return book2.numberOfClicks - book1.numberOfClicks;
//                 });
//         default:
//             return state;
//     }
//     return state;
// }