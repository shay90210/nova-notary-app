import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <div style={{ background: '#AA90B4' }}>
            <footer>
                <Container>
                    <Row>
                        <Col>
                            <h3>Connect with Us on Social Media</h3>
                            <a className='social-icons' href='https://www.instagram.com/nova_notary1/'><FontAwesomeIcon icon={faInstagram} /></a>
                            <a className='social-icons' href='https://www.tiktok.com/@novanotarydfw'><FontAwesomeIcon icon={faTiktok} /></a>
                        </Col>
                    </Row>
                    <br />
                    <hr style={{ color: 'black' }} />
                    <Row>
                        <Col>
                            <p style={{ color: '#4F1963' }}
                            >&copy; 2022, Nova Notary Powered by theGlamTechie</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default Footer; 