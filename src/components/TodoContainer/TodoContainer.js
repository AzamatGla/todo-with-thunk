import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import InputTask from './InputTask/InputTask'
import TasksList from './TasksList/TasksList'
import './TodoContainer.css'
import {asyncFetchData} from '../../redux/asyncActions';

const TodoContainer = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(asyncFetchData()));
    return (
        <div className="app-container">
            <h1 className="label text-light">Список задач</h1>
            <InputTask />
            <TasksList />
        </div>
    )
}

export default TodoContainer
