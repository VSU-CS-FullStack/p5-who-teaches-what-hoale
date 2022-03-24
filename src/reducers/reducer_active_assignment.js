export default function(state=null, action) {
    switch(action.type){
        case 'ASSIGNMENT_SELECTED': 
            return action.payload;
        default:
            return state;
    }
    return state;
}