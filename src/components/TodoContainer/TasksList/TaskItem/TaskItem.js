import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import {asyncChangeCheckedStatus, asyncDeleteTask, asyncFetchData} from '../../../../redux/asyncActions';

const TaskItem = ({task}) => {
    const dispatch = useDispatch();
    const [state, setState] = useState(task);



    const changeCheckStatus = async () => {
        console.log(state.checked)
        setState({
            ...state,
            checked: !state.checked
        })
        console.log(state)
        return dispatch(asyncChangeCheckedStatus(state))
    }
    const checkTask = () => {
        console.log(state.checked)
        if (state.checked) {
            return (
                <div>
                    <input type="checkbox" onClick={changeCheckStatus} defaultChecked></input>
                    <span className="task"><s>{state.text}</s></span>
                </div>   
                )
        }
        return (
            <div>
                <input type="checkbox" onClick={changeCheckStatus}></input>
                <span className="task">{state.text}</span>
            </div>)
    }
    const deleteTask = (id) => {
        dispatch(asyncDeleteTask(id))
    }
    

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">              
                {checkTask()}
            <div className="buttons d-flex justify-content-between">
                <Link to={`/edit/${state.id}`}>
                    <button className="btn btn-warning">Edit</button>
                </Link>
                <button className="btn btn-danger" onClick={() => deleteTask(state.id)}>Delete</button>
            </div>
        </li>
    )
}


export default TaskItem
