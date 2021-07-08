import React from "react";
import { Link } from "react-router-dom";


//import style from "./nav.module.css"   
const Nav =()=>{
return(
    <div >
         <nav>
        <ul> 
          <li className="mt-5 mb-4"><a href="#section-1"><button  type="button" class="btn btn-outline-success">Hack Club</button></a></li>
          <li className="mb-4"><a href="#section-2"> <button type="button" class="btn btn-outline-secondary">About us</button></a></li>
          <li className="mb-4"><a href="#section-3"> <button type="button" class="btn btn-outline-primary">Gallery</button></a></li>
          <li className="mb-4"><a href="#section-4"> <button type="button" class="btn btn-outline-secondary">Events</button></a></li>
          <li className="mb-4"><a href="#section-5"> <button type="button" class="btn btn-outline-primary">Register</button></a></li>
          <li className="mb-0"><a href="#section-6"> <button type="button" class="btn btn-outline-secondary">Contact us</button></a></li>
        </ul>
      </nav>
    </div>
)
}
export default Nav;