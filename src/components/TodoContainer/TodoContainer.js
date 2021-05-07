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
        <>
            <InputTask />
            <TasksList />
        </>
    )
}

export default TodoContainer
