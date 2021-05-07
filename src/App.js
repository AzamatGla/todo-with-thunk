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
        <Router>
            <Provider store={store}>      
                    <Switch>
                        <Route exact path="/" component={TodoContainer} />
                        <Route path="/edit/:id" component={UpdateTask} />
                        <Route path="*" render={() => <h1 className="error404">error 404</h1>} />
                    </Switch>                
            </Provider>
        </Router>
        </div>
    </div>
  );
}

export default App;
