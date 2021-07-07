import React from "react";
import "./Register.css";
const Register = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="jumbotron ">
          <h1 class="display-4">Be a part of the club!</h1>
          <p class="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p class="lead d-flex justify-content-between">
            <a class="btn btn-primary btn-lg" href="/" role="button">
              Register Now!
            </a>
            <a class="btn btn-success btn-lg" href="/" role="button">
              Already Registered? Login
            </a>
          </p>
        </div>

        <div class="col-md-auto" id="right">
          <h3>Some photo later</h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
