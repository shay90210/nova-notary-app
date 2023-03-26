import { ContactForm } from '../components/ContactForm';

import { Container, Col, Row } from 'reactstrap';

const ContactPage = () => {
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
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactPage; 