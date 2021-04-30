import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {asyncChangeCheckedStatus} from '../../../../redux/asyncActions';

const TaskItem = ({task}) => {
    const dispatch = useDispatch();
    const [state, setState] = useState(task);


    const changeCheckStatus = () => {
        setState({
            id: state.id,
            text: state.text,
            checked: !state.checked
        })
        return dispatch(asyncChangeCheckedStatus(state))
    }
    const checkTask = () => {
        if (state.checked) {
            return (
                <div>
                    <input type="checkbox" onClick={changeCheckStatus} checked></input>
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
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">              
                {checkTask()}
            <div className="buttons d-flex justify-content-between">
                <button className="btn btn-warning">Edit</button>
                <button className="btn btn-danger">Delete</button>
            </div>
        </li>
    )
}


export default TaskItem
