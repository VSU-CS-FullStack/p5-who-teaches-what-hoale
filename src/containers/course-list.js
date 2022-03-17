import React, { Component } from "react";
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { selectCourse } from '../actions/index';

class CourseList extends Component {
    renderList() {
        return this.props.courses.map((course, index)=>{
            return (
                <li 
                onClick={ () => this.props.selectCourse(course) }
                key={index} 
                className="list-group-item">
                {course.name}
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
        courses: state.courses,
        activeCourse: state.activeCourse
}

}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectCourse: selectCourse }, dispatch);
}




export default connect(mapStateToProps, mapDispatchToProps)(CourseList);