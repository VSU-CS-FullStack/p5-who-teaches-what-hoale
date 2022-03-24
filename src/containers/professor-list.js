import React, { Component } from "react";
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { selectProfessor, selectCourse} from '../actions/index';

const a=null
class ProfessorList extends Component {
    renderList() {
        return this.props.professors.map((professor, index)=>{
            return (
                <li 
                onClick={ () => {this.props.selectProfessor(professor);this.props.selectCourse(a)}}
                key={index} 
                className="list-group-item">
                {professor.name}
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
        professors: state.professors,
        activeProfessor: state.activeProfessor
}

}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectProfessor: selectProfessor,selectCourse:selectCourse }, dispatch);
}




export default connect(mapStateToProps, mapDispatchToProps)(ProfessorList);