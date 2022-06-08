import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Frame1 from "./components/Frame1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|frame-1)">
          <Frame1 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
