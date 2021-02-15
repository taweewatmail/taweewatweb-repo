import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Homemyweb from "./components/layout/Home";
import homeLogin from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Facts_about_me from "./components/aboutme/Facts_about_me";
import Contract from "./components/aboutme/Contract";
import Products from "./components/aboutme/Products";
import JokesList from "./pages/JokesList";
import JokesInsert from "./pages/JokesInsert";
import JokesUpdate from "./pages/JokesUpdate";
import home from "./app/index";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class login extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/Landing" component={homeLogin} />
            <Route exact path="/" component={Homemyweb} />
            <Route exact path="/facts_about_me" component={Facts_about_me} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Contract" component={Contract} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
                <PrivateRoute exact path="/jokes/list" component={JokesList} />
            </Switch>
            <Switch>
                <PrivateRoute exact path="/jokes/create" component={JokesInsert} />
            </Switch>
            <Switch>
                <PrivateRoute exact path="/jokes/update/*" component={JokesUpdate} />
            </Switch>
            <Switch>
                <PrivateRoute exact path="/home" component={home} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default login;