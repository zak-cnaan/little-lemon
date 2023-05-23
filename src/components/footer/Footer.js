import { Container } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
    return (
        <footer>
            <div className="footer-background">
                <Container>
                    <div className="footer-content">
                    <img src={ Logo } alt="Little Lemon logo" />
                        <div className="locations">
                            <h5>LOCATIONS</h5>
                            <ul>
                                <li>Accra</li>
                                <li>Kumasi</li>
                                <li>Cape Coast</li>
                                <li>Tamale</li>
                            </ul>
                        </div>
                        <div className="opening-times">
                            <h5>OPENING TIMES</h5>
                            <ul>
                                <li>Mon - Wed: 10:30AM - 12:00AM</li>
                                <li>Fri: 12:00PM - 1:00AM</li>
                                <li>Sat - Sun: 10:30AM - 12:00AM</li>
                            </ul>
                        </div>
                        <div className="contact">
                            <h5>CONTACT US</h5>
                            <ul>
                                <li>96 Abafom Road, North Ridge - Accra</li>
                                <li>Tel: 020 7928 0678</li>
                                <li>Email: info@littlelemon.com</li>
                            </ul>
                        </div>
                </div>
                <div className="copyright">
                    <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
                </div>
            </Container>
            </div>
        </footer>
      )
}

export default Footer;