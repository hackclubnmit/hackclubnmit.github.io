import React from 'react';
import "./contact.scss";
import { Container ,Row} from 'reactstrap';


const Contact=() =>{
    return(
    <div>
    <div className="contact_div">
        <Container>
            <div className="contact_box">
               <h1>CONTACT US</h1>
               <p className="contact_box__add"> Drop us a mail or join Our Discord</p>
               <div className="links">  
                
                <Row>
                     <a href="mailto:hackclubnmit@gmail.com"><button className="button btn"> <i class="fas fa-envelope fa-2x fab"></i> Email us</button> </a>
                    <a href="https://t.me/hackclubnmit"><button className="button btn"><i class="fab fa-telegram fa-2x"></i>Telegram</button></a> 
                    <a href="https://discord.com/invite/6ntVVANt"><button className="button btn"><i class="fab fa-discord fa-2x"></i> Discord </button> </a>
                    <a href="https://linktr.ee/hackclubnmit">  <button className=" button btn"> linktr.ee</button></a>
                </Row>
                <Row>
                   
                </Row>

               </div>
            </div>
            
        </Container>
    </div>

    </div>
        
    )
    
}
export default Contact;