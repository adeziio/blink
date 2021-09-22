import './App.css';
import NavBar from './components/navbar/NavBar';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Jennie from './components/jennie/Jennie';
import Jisoo from './components/jisoo/Jisoo';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/jennie">
            <Jennie />
          </Route>
          <Route path="/jisoo">
            <Jisoo />
          </Route>
          <Route path="/rose">

          </Route>
          <Route path="/lisa">

          </Route>
          <Route exact path="/" render={() => (<Redirect to="/jennie" />)} />
          <Route exact path="/*" render={() => (<Redirect to="/jennie" />)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
