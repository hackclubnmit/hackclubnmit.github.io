import React, { useEffect, Fragment } from 'react';

import Card from '../Util/card/card';

const Events = () => {
  useEffect(() => {
    const deviceWidth =
      window.innerWidth > 0 ? window.innerWidth : screen.width;
    console.log(deviceWidth);
  }, []);

  return (
    <Fragment>
      <section id="section-events">
        <h2>Upcoming Events</h2>
      </section>
    </Fragment>
  );
};

export default Events;
