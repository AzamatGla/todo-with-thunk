import {v4 as uuidv4 } from 'uuid';

export const addNewTask = (task) => {
    const newTaskObject = {
        id: uuidv4(),
        text: task,
        checked: false
    }
    return {
        type: "ADD_NEW_TASK",
        payload: newTaskObject
    }
}

export const fetchData = (tasks) => {
    console.log('here')
    return {
        type: "GET_DATA_FROM_DB",
        payload: tasks
    }
}

export const deleteTask = (index) => {
    return {
        type: "DELETE_TASK",
        payload: index
    }
}

export const editTask = (newTask) => {
    return {
        type: "EDIT_TASK",
        payload: newTask
    }
}
