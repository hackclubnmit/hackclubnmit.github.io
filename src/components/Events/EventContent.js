import React from 'react';

const monthArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const EventContent = (props) => {
  // assumed date yyyy/mm/dd
  const [, month, date] = props.date.split('/');

  return (
    <div className="eventContent__container">
      {props.date ? (
        <div className="eventContent__container--date">
          <h3 className="eventContent__date">{date}</h3>
          <h4 className="eventContent__month">{monthArray[month - 1]}</h4>
        </div>
      ) : (
        <h3 className="eventContent__date">Soon!</h3>
      )}
      <h3 className="eventContent__title">{props.title}</h3>
      <div className="eventContent__container--details">
        <p className="eventContent__host">{props.host}</p>
        <p className="eventContent__time">{props.time}</p>
      </div>
    </div>
  );
};

export default EventContent;
