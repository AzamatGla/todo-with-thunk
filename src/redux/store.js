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
        default: return state
    }
}

export const store = createStore(reducer, applyMiddleware(thunk));