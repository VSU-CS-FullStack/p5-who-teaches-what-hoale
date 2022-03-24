import React, { Component } from "react";
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { selectCourse } from '../actions/index';

class CourseList extends Component {
    renderList() {
        return this.props.courses.map((course, index)=>{
            return (
                <li 
                onClick={ () => this.props.selectCourse(course,this.props.activeProfessor)}
                key={index} 
                className="list-group-item">
                 <div>
                    Number of Sections to Offer: {course.sections}
                </div>
                
                CS:{course.id}
                <div>
                        {course.name}
                </div>
                <div>
                    Credit Hours: {course.hour}
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
        courses: state.courses,
        activeCourse: state.activeCourse,
        activeProfessor:state.activeProfessor
}

}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectCourse: selectCourse}, dispatch);
}




export default connect(mapStateToProps, mapDispatchToProps)(CourseList);