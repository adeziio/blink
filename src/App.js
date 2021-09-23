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
import Rose from './components/rose/Rose';
import Lisa from './components/lisa/Lisa';

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
            <Rose />
          </Route>
          <Route path="/lisa">
            <Lisa />
          </Route>
          <Route exact path="/" render={() => (<Redirect to="/jennie" />)} />
          <Route exact path="/*" render={() => (<Redirect to="/jennie" />)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
