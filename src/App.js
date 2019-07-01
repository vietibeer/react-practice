import React from 'react';
import './App.css';
import Game from './game';
import CaculatorTemperature from './convert-temperature';
import Todos from './trainning-redux/todos-with-undo';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/tik-tok">Game Tik-Tok</Link>
            </li>
            <li>
              <Link to="/todos-with-undo">Todos with (Undo/Redo)</Link>
            </li>
            <li>
              <Link to="/temperature">Convert Temperature</Link>
            </li>
          </ul>

          <hr/>

          <Route exact path="/tik-tok" component={Game} />
          {/* <Route path="/todos-with-undo" component={Todos} /> */}
          <Route path="/todos-with-undo" render={() => <h1>Todos with Redux</h1>} />
          <Route path="/temperature" render={CaculatorTemperature} />
        </div>
      </Router>
    );
  }

}

export default App;