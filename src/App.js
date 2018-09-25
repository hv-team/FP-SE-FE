import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
// Styles
// CoreUI Icons Set
import "@coreui/icons/css/coreui-icons.min.css";
// Import Flag Icons Set
import "flag-icon-css/css/flag-icon.min.css";
// Import Font Awesome Icons Set
import "font-awesome/css/font-awesome.min.css";
// Import Simple Line Icons Set
import "simple-line-icons/css/simple-line-icons.css";
// Import Main styles for this application
import "./scss/style.css";

// Containers
import { DefaultLayout } from "./containers";
// Pages
import { Login, Page404, Page500, Register, LandingPage } from './views/Pages';

// import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register}/>
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route path="/dashboard" name="Dashboard" component={DefaultLayout} />
          <Route path="/store-analytics/one-day" name="One Day Statistics" component={DefaultLayout} />
          <Route path="/store-analytics/date-range" name="One Day Statistics" component={DefaultLayout} />
          <Route path="/devices" name="Devices" component={DefaultLayout} />
          <Route path="/users" name="Users" component={DefaultLayout} />
          <Route exact path="/" name="Landing Page" component={LandingPage} />
          <Redirect from="/" to="/404" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
