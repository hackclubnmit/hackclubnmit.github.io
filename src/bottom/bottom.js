import Logo from '../assets/logo.svg';

const Bottom = () => {
    return ( 
        <div className="bot">
            <div className="logo">
                <img src={Logo} alt="Hack Club NMIT Logo" className="App-logo"/>
            </div>
            <div className="bot-write">
                <h1>Find your Passion</h1>
                <ul className="bot-content">
                    <li><a href="https://www.instagram.com/hackclubnmit/">Instagram</a></li>
                    <li><a href="https://twitter.com/HackClubNmit">Twitter</a></li>
                    <li><a href="https://www.linkedin.com/company/hackclubnmit/">LinkedIn</a></li>
                    <li><a href="https://www.youtube.com/channel/UCMcJ0_61s_G1UvPbVPs2edw/videos">YouTube</a></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Bottom;