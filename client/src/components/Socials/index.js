import { NavLink } from "react-router-dom";
import instagram from '../../img/icon-instagram.svg'
import whatsapp from '../../img/icon-whatsapp.svg'
import pinterest from '../../img/icon-pinterest.svg'
import './style.css'

function Socials() {
    return(
        <section className="social">
           
            <NavLink
            to={{pathname: "https://api.whatsapp.com/send?phone=5583988028350"}} target="_blank"
            className="social__item"             
            >
            <img src={whatsapp} alt="Logo Whatsapp" width="40px" height="40px" />
            </NavLink>

            <NavLink
            to={{pathname: "https://instagram.com/anagliciaarquitetura"}} target="_blank"
            className="social__item"             
            >
            <img src={instagram} alt="Logo Instagram" width="40px" height="40px" />
            </NavLink>

            <NavLink
            to={{pathname: "https://pin.it/1jvipaq"}} target="_blank"
            className="social__item"             
            >
            <img src={pinterest} alt="Logo Pinterest" width="40px" height="40px" />
            </NavLink>
        </section>
    );
}

export default Socials;