import React, { Component } from "react";
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { selectCourse } from '../actions/index';

class AssignmentsList extends Component {
    renderList() {
        return this.props.assignments.map((assignment, index)=>{
            return (
                <li 
                // onClick={ () => this.props.selectCourse(course) }
                key={index} 
                className="list-group-item">
                <div>
                {assignment.course.name} 
                </div>
                {assignment.professor.name}
            </li>
            );
        });
    }

    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()} 
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        assignments:state.assignments.assignments,
}

}
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({ selectCourse: selectCourse }, dispatch);
// }




export default connect(mapStateToProps, 
    //mapDispatchToProps
    )(AssignmentsList);