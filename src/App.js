import "./App.css";

import Login from "./containers/Login";
import Inscription from "./containers/Inscription";
import React from "react"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoApp from "./containers/TodoApp";
function App() {
  return (
  
      
       <Router>
      <Switch>
         
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/inscription">
          <Inscription />
        </Route>
        <Route path="/todo">
          <TodoApp />
        </Route>
      </Switch>
    </Router>
   
  );
}

export default App;
