import { Provider, useDispatch } from 'react-redux';
import './App.css';
import TodoContainer from './components/TodoContainer/TodoContainer';
import {store} from './redux/store';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import UpdateTask from './components/UpdateTask/UpdateTask';

function App() {
  return (
    <div className="background-image d-flex justify-content-center">
        <div className="app-container">
        <h1 className="label text-light">Список задач</h1>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <TodoContainer />
                    </Route>
                    <Route path="/update/:id">
                        <UpdateTask />
                    </Route>
                    
                </Switch>
            </Router>
            
        </Provider>
        </div>
    </div>
  );
}

export default App;
