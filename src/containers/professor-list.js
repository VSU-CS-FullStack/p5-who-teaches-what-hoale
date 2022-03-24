import React, { Component } from "react";
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { selectProfessor, selectCourse} from '../actions/index';

const a=null
const professorSelected=true
class ProfessorList extends Component {
    renderList() {
        return this.props.professors.map((professor, index)=>{
            return (
                <li 
                onClick={ () => {this.props.selectProfessor(professor,professorSelected,
                0);
                }
                }
                key={index} 
                className="list-group-item">
                <div>
                {professor.name}
                </div>
                <div>
                Number of Courses Taught: {professor.numCourses}
                </div>
                <div>
                Number of Credit Hours Taught: {professor.credit}
                </div>
                
            </li>
            );
        });
    }

    render() {
        return(
            <ul className="list-group col-sm">
                {this.renderList()} 
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        professors: state.professors,
        activeProfessor: state.activeProfessor,
        activeCourse: state.activeCourse
}

}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectProfessor: selectProfessor,selectCourse:selectCourse }, dispatch);
}




export default connect(mapStateToProps, mapDispatchToProps)(ProfessorList);