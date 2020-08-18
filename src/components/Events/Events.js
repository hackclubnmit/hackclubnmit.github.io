import React, { Fragment } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Scroll, useAnimation } from 'framer';

import Card from './card/card';
import EventContent from './EventContent';
import './events.css';

// const arr = [1, 2, 3];
// const cards = arr.map((item) => <Card key={item}>{item}</Card>);

const Events = () => {
  const width = window.innerWidth;

  return (
    <Fragment>
      <section id="section-events" className="events_section">
        <h2 className="event_section-heading ">Upcoming Events</h2>
        <Scroll height={400} width={width} direction="horizontal">
          <div className="events__container">
            <Card key={1}>
              <EventContent
                date="2020/08/23"
                title="Setting Up The Best PortFolio"
                host="Aditya Vijaykumar"
                time="6:00 PM"
              />
            </Card>
            <Card key={2}>
              <EventContent
                date="2020/08/30"
                title="Dive Into Blender's Basics"
                host="Aniruddha Sill"
                time="6:00 PM"
              />
            </Card>
            <Card key={3}>
              <EventContent
                date="2020/09/10"
                title="API Mocking for Client Side"
                host="Anurag Singh"
                time="6:00 PM"
              />
            </Card>
            <Card key={4}>
              <EventContent
                date="2020/09/10"
                title="API Mocking for Client Side"
                host="Anurag Singh"
                time="6:00 PM"
              />
            </Card>
            <Card key={5}>
              <EventContent
                date=""
                title="API Mocking for Client Side"
                host="Anurag Singh"
                time="6:00 PM"
              />
            </Card>
            <Card key={6}>
              <EventContent
                date=""
                title="API Mocking for Client Side"
                host="Anurag Singh"
                time="6:00 PM"
              />
            </Card>
          </div>
        </Scroll>
      </section>
    </Fragment>
  );
};

export default Events;
