import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faTiktok} from '@fortawesome/free-brands-svg-icons';
import Navbar from 'react-bootstrap/Navbar';

import './Footer.css';

const Footer = () => {

    return (
        <Navbar bg="light">
            <div className="socialMedia-container">
                <a href='https://facebook.com'>
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href='https://facebook.com'>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href='https://facebook.com'>
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href='https://facebook.com'>
                    <FontAwesomeIcon icon={faTiktok} />
                </a>
            </div>
        </Navbar>
    )
}

export default Footer