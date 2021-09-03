import "./App.css";

import Login from "./containers/Login";
import ReadTodo from "./containers/ReadTodo";
import Inscription from "./containers/Inscription";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoApp from "./containers/TodoApp";
import Header from "./layouts/Header";
function App() {
  return (
    <Router>
      <Header />
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
        <Route path="/tasks">
          <ReadTodo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
