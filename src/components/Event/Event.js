import React from "react"; 
import "./Event.css";
const Event = () => {
  return ( 
<div className="event-container">
      <h1 className="event-heading"> Events</h1>
      <center className="mt-0"><hr /></center>

      <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="#">All</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Upcoming</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Past</a>
  </li>
</ul>


<div className="mt-5 d-flex justify-content-around">
<div class="card">
  <img class="card-img-top" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Event name</h5>
    <p class="card-text">Event Description</p>
    <a href="#" class="btn btn-success">Attend event</a>
  </div>
</div>
<div class="card">
  <img class="card-img-top" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Event name</h5>
    <p class="card-text">Event Description</p>
    <a href="#" class="btn btn-success">Attend event</a>
  </div>
</div>
<div class="card">
  <img class="card-img-top" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Event name</h5>
    <p class="card-text">Event Description</p>
    <a href="#" class="btn btn-success">Attend event</a>
  </div>
</div>
</div>





    </div>
  );
};

export default Event;
