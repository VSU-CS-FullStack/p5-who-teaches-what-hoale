import React, { Component } from 'react';
import CourseList from '../containers/course-list';
import CourseDetail from '../containers/course-detail';
import ProfessorList from '../containers/professor-list';
export default class App extends Component {
  render() {
    return (

      <div class='row'>
        <div class="col-sm">
        Courses
        <CourseList />
        <CourseDetail/>
      </div>
      <div class="col-sm">  
        Professors
        <ProfessorList/>
      </div>
        </div>
      
    );
  }
}   