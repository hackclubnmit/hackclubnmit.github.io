import React, { Fragment } from "react";
import Home from "./pages/home/Home";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
import Event from "./components/Event/Event";
import Gallery from "./components/Gallery/Gallery";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/gallery' component={Gallery}></Route>
        <Route exact path='/events' component={Event}></Route>
      </Switch>
    </Router>
  );
};

export default App;
