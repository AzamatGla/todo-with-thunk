import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addNewTask } from '../../../redux/actions';
import { asyncPostData } from '../../../redux/asyncActions';

const InputTask = (props) => {
    const dispatch = useDispatch();
    const [state, setState] = useState('');

    const pressEnter = (e) => {
        if (e.key === 'Enter') {
            console.log(state)
            props.add(state)
            dispatch(asyncPostData());
            setState('');
        }
    }
    return (
        <div className="input-task">
            <input type="text" placeholder="Напишите вашу задачу..." className="form-control" value={state} onChange={(e) => setState(e.target.value)} onKeyPress={pressEnter}></input>
        </div>
    )
}

const mapDispatchToProps = (dispatch, data) => {
    return {
        add: (data) => dispatch(addNewTask(data))
    }
}

export default connect(null, mapDispatchToProps)(InputTask);
