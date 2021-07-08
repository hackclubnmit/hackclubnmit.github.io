import React from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import styles from '../../app.module.css';



function Gallery() {


    return(

<div class="container">

<h1 className="text-center" className={styles.h1}>Gallery...</h1>
<center className="mt-0"><hr className={styles.hr} /></center>


  <div class="row mt-4 ">
    <div class="col-sm">
    <img className={styles.img} class="img-thumbnail" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="pc3"/>
    </div>
    <div class="col-sm">
    <img className={styles.img} class="img-thumbnail" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="pc3"/>
    </div>
    <div class="col-sm">
    <img className={styles.img} class="img-thumbnail" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="pc3"/>
    </div>
  </div>

  <div class="row mt-4">
    <div class="col-sm">
    <img className={styles.img} class="img-thumbnail" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="pc3"/>
    </div>
    <div class="col-sm">
    <img className={styles.img} class="img-thumbnail" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="pc3"/>
    </div>
    <div class="col-sm">
    <img className={styles.img} class="img-thumbnail" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="pc3"/>
    </div>
  </div>
</div>
    )
}




export default Gallery;