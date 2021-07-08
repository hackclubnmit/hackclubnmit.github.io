import React from "react"; 
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import styles from '../../app.module.css';



const Event = () => {

  let all= document.querySelector("#all");
	let upcoming= document.querySelector("#upcoming");
	let past= document.querySelector("#past");

  /*all.addEventListener("click", () => {
    //
  }

  upcoming.addEventListener("click",() =>{
    //
  }

  past.addEventListener("click",() =>{
    //
  }*/




  return ( 
<div>
<div className={styles.eventContainer}>
      <h1 className={styles.h1} class="text-center"> Events</h1>
      <center className="mt-0"><hr className={styles.hr} /></center>

<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="# " id="all">All</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="# " id="upcoming">Upcoming</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="# " id="past">Past</a>
  </li>
</ul>


<div className="mt-5 d-flex justify-content-around">
<div className={styles.card}>
  <img class="card-img-top" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="pc1"/>
  <div class="card-body">
    <h5 class="card-title">Event name</h5>
    <p class="card-text">Event Description</p>
    <a href="# " class="btn btn-success">Attend event</a>
  </div>
</div>
<div className={styles.card}>
  <img class="card-img-top" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="Cpc2"/>
  <div class="card-body">
    <h5 class="card-title">Event name</h5>
    <p class="card-text">Event Description</p>
    <a href="# " class="btn btn-success">Attend event</a>
  </div>
</div>
<div className={styles.card}>
  <img class="card-img-top" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="pc3"/>
  <div class="card-body">
    <h5 class="card-title">Event name</h5>
    <p class="card-text">Event Description</p>
    <a href="# " class="btn btn-success">Attend event</a>
  </div>
</div>
</div>
</div>
</div>
  );
};

export default Event;
