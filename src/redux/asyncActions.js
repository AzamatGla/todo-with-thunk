import {fetchData} from './actions';

export const asyncFetchData = () => (dispatch) => {
    fetch('http://localhost:3000/tasks')
        .then(res => res.json())
        .then(json => {
            dispatch(fetchData(json))
            console.log('success')
            console.log(json)
        });
}