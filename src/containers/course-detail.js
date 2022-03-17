import React, { Component } from 'react';
import { connect } from 'react-redux';

class CourseDetail extends Component{
    render(){
        if (!this.props.course){
            return <div>Select a book to get started.</div>
        }
        return (
            <div className="col-md-8">
                <h3>Details for:</h3>
                <div> Title: { this.props.course.name } </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        course: state.activeCourse
    };
}

export default connect(mapStateToProps)(CourseDetail);