import {addNewTask, fetchData, deleteTask, editTask} from './actions';

export const asyncFetchData = () => async (dispatch) => {
    await fetch('http://localhost:3000/tasks')
        .then(res => res.json())
        .then(json => {
            dispatch(fetchData(json));
        })
        .catch(err => alert('Проблемы с сервером, пожалуйста убедитесь что вы запустили json-server'));
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
};

export const asyncChangeCheckedStatus = (state) => async (dispatch, getState) => {
    console.log(state)
    const newStatus = state.checked ? false : true;
    console.log(newStatus);
    const updatedTask = {id: state.id, text: state.text, checked: newStatus};
    await fetch(`http://localhost:3000/tasks/${state.id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(updatedTask)
    })
    .then(res => res.json());
};

export const asyncDeleteTask = (id) => async (dispatch, getState) => {
    const index = getState().tasks.findIndex(item => item.id === id);
    await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE"
    })
    .then(res => {
            return dispatch(deleteTask(index));
    });
};

export const asyncEditTask = (newTask) => async (dispatch, getState) => {
    const newArray = getState().tasks.map(item => item.id === newTask.id ? newTask : item);
    await fetch(`http://localhost:3000/tasks/${newTask.id}`, {
        method: "PUT",
        headers: {
            "Access": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(newTask)
    }).then(res => {
        dispatch(fetchData(newArray));
        console.log('success')
    })
}
