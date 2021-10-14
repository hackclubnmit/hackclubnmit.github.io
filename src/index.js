import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Homepage,
  Aboutpage,
  Eventspage,
  Gallertpage,
  // EventsHome,
} from "./views";
import Navbar from "./components/Navbars/Navbars";
import "./index.css";
import Footer from "./components/Footer/Footer";
//import Donate from "./views/Donate/Donate";
import TeamPage from "./views/TeamPage/Teampage";
import Contact from "./views/contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <Fragment>
      <Homepage />
      <Aboutpage />
      {/* <EventsHome /> */}
      <Gallertpage />
    </Fragment>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      {/*<Route exact path="/donate" component={Donate} />*/}
      <Route exact path="/team" component={TeamPage} />
      <Route exact path="/events" component={Eventspage} />
      <Route exact path="/Gallery" component={Gallertpage} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
    <Footer />
  </BrowserRouter>,

  document.getElementById("root")
);
