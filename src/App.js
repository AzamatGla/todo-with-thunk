import { Provider, useDispatch } from 'react-redux';
import './App.css';
import TodoContainer from './components/TodoContainer/TodoContainer';
import {store} from './redux/store';

function App() {
  return (
    <div className="background-image d-flex justify-content-center">
        <Provider store={store}>
            <TodoContainer />
        </Provider>
        
    </div>
  );
}

export default App;
