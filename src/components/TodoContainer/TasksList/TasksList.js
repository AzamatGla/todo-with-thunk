import React from 'react';
import { connect } from 'react-redux';
import './TasksList.css';
import TaskItem from './TaskItem/TaskItem';


const TasksList = (props) => {
    return (
        <ul className="tasks-list list-group mt-3 shadow-sm">
            {props.tasks.map(task => <TaskItem key={task.id} task={task}></TaskItem>)}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = () => {
    
}


export default connect(mapStateToProps)(TasksList);
