import { Container, Col, Row } from 'reactstrap';
import ContactFormTwo from '../components/ContactFormTwo';

export const ContactPage = () => {
    return (
        <div>
            <h1
                style={{
                    textAlign: 'center',
                    backgroundColor: '#4F1963',
                    fontSize: '48px',
                    color: 'white',

                }}
            >
                Contact Us
            </h1>
            <Container className='contact-form'>
                <Row>
                    <Col>
                        <ContactFormTwo />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}