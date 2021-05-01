import {createStore,  applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const initialState = {
    tasks: []
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_NEW_TASK": {
            
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        }
        case "GET_DATA_FROM_DB": {
            return {
                ...state,
                tasks: [...state.tasks, ...action.payload]
            }
        }
        case "CHANGE_STATUS": {
            return {
                ...state,
                tasks: [...state.tasks]
            }
        }
        case "DELETE_ITEM": {
            return {
                ...state,  
                tasks: [...state.tasks.slice(0, action.payload), ...state.tasks.slice(action.payload + 1)]
            }
        }
        default: return state
    }
}

export const store = createStore(reducer, applyMiddleware(thunk));