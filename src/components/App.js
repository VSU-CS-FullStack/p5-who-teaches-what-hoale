import React, { Component } from 'react';
import CourseList from '../containers/course-list';
import ProfessorList from '../containers/professor-list';
import AssignmentsList from '../containers/assignments-list';
export default class App extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-sm">
        Courses
        <CourseList />
      </div>
      <div class="col-sm">  
        Professors
        <ProfessorList/>
      </div>
      <div class="col-sm">  
        Assignments
        <AssignmentsList/>
      </div>
        </div>
      
    );
  }
}   