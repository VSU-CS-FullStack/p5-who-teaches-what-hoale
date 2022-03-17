import React, { Component } from "react";
import { connect } from 'react-redux';

class CourseList extends Component {
    renderList() {
        return this.props.courses.map((course, index)=>{
            return (
                <li key={index} className="list-group-item">
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
        courses: state.courses
}
}

export default connect(mapStateToProps)(CourseList);