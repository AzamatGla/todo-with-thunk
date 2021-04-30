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
    return {
        type: "GET_DATA_FROM_DB",
        payload: tasks
    }
}
