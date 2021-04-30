import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addNewTask} from '../../../redux/actions';

const InputTask = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState('');

    const pressEnter = (e) => {
        if (e.key === 'Enter') {
            dispatch(addNewTask(state));
            setState('');
        }
    }
    return (
        <div className="input-task">
            <input type="text" placeholder="Напишите вашу задачу..." className="form-control" value={state} onChange={(e) => setState(e.target.value)} onKeyPress={pressEnter}></input>
        </div>
    )
}

export default InputTask
