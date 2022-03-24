import React, { Component } from "react";
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { selectAssignment} from '../actions/index';


class AssignmentsList extends Component {
    renderList() {
        return this.props.assignments.map((assignment, index)=>{
            
            return (
                <li 
                onClick={ () => this.props.selectAssignment(assignment,index) }
                key={index} 
                className="list-group-item">
                <div>
                {assignment.professor.name} 
                </div>
                <div>
                CS {assignment.course.id} 
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
        assignments:state.assignments.assignments,
}

}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectAssignment: selectAssignment}, dispatch);
}




export default connect(mapStateToProps, 
    mapDispatchToProps
    )(AssignmentsList);