import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              HACKCLUB NMIT
            </h6>
            <p>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
            <p>
              <a href="#! ">Home</a>
            </p>
            <p>
              <a href="#! ">About</a>
            </p>
            <p>
              <a href="#! ">Events</a>
            </p>
            <p>
              <a href="#! ">Gallery</a>
            </p>
            <p>
              <a href="#! ">Sponsors</a>
            </p>
            <p>
              <a href="#! ">Meet The Team</a>
            </p>
            <p>
              <a href="#! ">Register</a>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <hr className="w-100 clearfix d-md-none" />
         
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact us</h6>
            <p>
              <i className="fa fa-home mr-3" /> NMIT, Bangalore, India 560001
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> hackclubnmit@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 91 234 567 88 78
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 91 234 567 89 78
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.hackclubnmit.in"> HACKCLUB NMIT  </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href="# ">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href="# ">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href="# ">
                    <i className="fab fa-google-plus" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href="# ">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPagePro;