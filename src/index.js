import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Home from "./views/Home/Home"
import { Homepage, Aboutpage, Eventspage, Gallertpage} from "./views";
import Navbar from "./components/Navbars/Navbars";
import "./index.css";

const Home = () => {
  return (
    <Fragment>
      <Homepage />
      <Aboutpage />
      <Eventspage />
      <Gallertpage/>
    </Fragment>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
