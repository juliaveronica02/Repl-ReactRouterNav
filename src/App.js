import React from "react";
import "./styles.css";
import Users from "./Component/Users";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

// import your Users component here

export default function App() {
  return (
    <div className="App">
      <h1> React Router Nav</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                {/* edit "Link to" below */}
                <Link to="/">Home</Link>
              </li>
              <li>
                {/* edit "Link to" below  */}
                <Link to="/about">About</Link>
              </li>
              <li>
                {/* edit "Link to" below  */}
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/users">
              <Users />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
