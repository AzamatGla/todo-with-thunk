import React, {useState} from 'react'
import { connect, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router'
import {asyncEditTask} from '../../redux/asyncActions';

const UpdateTask = (props) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();
    const task = props.tasks.find(task => task.id === id);
    const [state, setState] = useState(task);

    const submitUpdateTask = () => {
        dispatch(asyncEditTask(state));
        return history.push('/');
    }

    return (
        <div>
            <input type="text" className="form-control" value={state.text} onChange={(e) => setState({...task, text: e.target.value})}></input>
            <div className="buttons mt-1 d-flex">
                <button className="btn btn-warning" onClick={submitUpdateTask}>Изменить</button>
                <button className="btn btn-danger">Отменить</button>
            </div>
            
        </div>
    )
}

const mapStateToProps = () => (state) => {
    return {
        tasks: state.tasks 
    }
}

export default connect(mapStateToProps)(UpdateTask);
