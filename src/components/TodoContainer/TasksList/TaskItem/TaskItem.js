import React, {useState} from 'react'

const TaskItem = ({task}) => {
    const [state, setState] = useState(task);
    const [checkbox, setCheckbox] = useState(state.checked);
    const changeCheckStatus = () => {
        if (checkbox) {
            setCheckbox(false)
            return setState({
                ...state,
                checked: checkbox
            })
        }
        setCheckbox(true)
        return setState({
            ...state,
            checked: checkbox
        })
    }
    const checkTask = () => {
        if (checkbox) {
            return (
                    <span className="task"><s>{state.text}</s></span>
                )
        }
        return (<span className="task">{state.text}</span>)
    }
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <input type="checkbox" onClick={changeCheckStatus}></input>
                {checkTask()}
            </div>
            <div className="buttons d-flex justify-content-between">
                <button className="btn btn-warning">Edit</button>
                <button className="btn btn-danger">Delete</button>
            </div>
        </li>
    )
}


export default TaskItem
