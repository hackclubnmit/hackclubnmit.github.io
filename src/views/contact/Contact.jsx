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
               <p className="contact_box__add"> Drop us a mail or join Our Discord Channel</p>
               <div className="links">  
                
                <Row>
                     <button className="button btn"> <i class="fas fa-envelope fa-2x"></i> <a href="mailto:hackclubnmit@gmail.com">Email us</a></button>
                    <button className="button btn"><i class="fab fa-telegram fa-2x"></i><a href="https://t.me/hackclubnmit">Telegram</a></button> 
                    <button className="button btn"><i class="fab fa-discord fa-2x"></i><a href="https://discord.com/invite/6ntVVANt"> Discord </a></button>
                </Row>
                <Row>
                    <div className="btn-4"> <button className=" button btn btn4"> <a href="https://linktr.ee/hackclubnmit">linktree</a></button></div>
                </Row>

               </div>
            </div>
            
        </Container>
    </div>

    </div>
        
    )
    
}
export default Contact;