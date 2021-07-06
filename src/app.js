import React, { Fragment } from 'react';
import Home from './pages/home/Home';
import Events from './pages/events/Events';
const App = () => {
  return (
    <Fragment>
      <main>
        <Home />
        <Events />
      </main>
    </Fragment>
  );
};

export default App;
