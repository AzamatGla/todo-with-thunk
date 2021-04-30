import {addNewTask, fetchData} from './actions';

export const asyncFetchData = () => async (dispatch) => {
    await fetch('http://localhost:3000/tasks')
        .then(res => res.json())
        .then(json => {
            dispatch(fetchData(json))
            console.log('success')
            console.log(json)
        });
}

export const asyncPostData = () => async (dispatch, getState) => {
    const tasks = getState().tasks;
    const newTask = tasks[tasks.length - 1]
    await fetch('http://localhost:3000/tasks', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(newTask)
    })
    .then(res => res.json());
        
}
