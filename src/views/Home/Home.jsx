import React,{ useState,useEffect } from "react";
import "./home.scss";
import { Container, Button } from "reactstrap";

const Home = () => {
  const [show, setshow] = useState(false)
  const controlbutton = () =>{
    if (window.scrollY > 500){
      setshow(true)
    }else{
      setshow(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',controlbutton)
    return () => {
      window.removeEventListener('scroll',controlbutton)
    }
  }, [])
  return (
    <div>
      <div className="home">
        <Container className="home_container">
          <h1>A Club Run By Students, For Students</h1>
          <p>
          
          We are the movement of students orchestrating the classes we wish we could take.
          </p>
          <Button className="btn">Apply Now</Button>
          <div onClick="" className={`hold_scroll ${show && 'hide'}`}><div className="home_container__arrow" /></div>
        </Container>

      </div>
    </div>
  );
};

export default Home;
