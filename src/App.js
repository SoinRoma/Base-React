import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/authService";
import Login from "./components/Login";
import Home from "./components/Home";
import AuthVerify from "./services/authVerify";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-secondary">
            <div className="navbar-nav ml-auto">
              <li className="nav-item d-flex">
                <Link to={"/login"} className="nav-link" onClick={this.logOut}>
                  Выйти
                </Link>
              </li>
            </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
        <AuthVerify logOut={this.logOut}/>
      </div>

    );
  }
}

export default App;
