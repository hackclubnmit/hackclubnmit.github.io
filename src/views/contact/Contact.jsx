import React from 'react';
import "./contact.scss";
import { Container ,Row} from 'reactstrap';
 import { FaTelegram} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

const Contact=() =>{
    return(
    <div>

    <div className="contact_div">
        <Container>
            <div className="contact_box">
               <h1>CONTACT US</h1>
               <p className="contact_box__add"> Drop us a mail or join Our Telegram Channel</p>
               <div> 
                
                <Row>
                    <div className="btn"> <button> <MdEmail className="icon" /> <a href="mailto:hackclubnmit@gmail.com">Email us</a></button> </div>
                    <div className="btn"> <button><FaTelegram className="icon" /><a href="https://t.me/hackclubnmit">Telegram Channel</a></button> </div>
               
                </Row>

               </div>
            </div>
            
        </Container>
    </div>

    </div>
        
    )
    
}
export default Contact;