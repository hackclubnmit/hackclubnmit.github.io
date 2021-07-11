import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import MainLayout from "./layouts/Main/MainLayout"
import "./index.css";

ReactDOM.render(
    
    <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <MainLayout {...props} />} />
    
      {/* <Redirect from="/" to="/"/> */}
    </Switch>
  </BrowserRouter>
    
    
    , document.getElementById("root"));
