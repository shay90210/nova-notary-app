import {
    Button,
    Label,
    Col,
    FormGroup,
    Form,
    Input,
} from 'reactstrap';

const ContactForm = () => {

    return (
        <div>
            <Form>
                <FormGroup row>
                    <Label for='firstName' sm={2}>
                        First Name
                    </Label>
                    <Col sm={10}>
                        <Input
                            id='firstName'
                            name='firstName'
                            placeholder='First Name'
                            type='text'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='lastName' sm={2}>
                        Last Name
                    </Label>
                    <Col sm={10}>
                        <Input
                            id='lastName'
                            name='lastName'
                            placeholder='Last Name'
                            type='text'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='email' sm={2}>
                        Email Address
                    </Label>
                    <Col sm={10}>
                        <Input
                            id='email'
                            name='email'
                            placeholder='Email Address'
                            type='email'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='phoneNum' sm={2}>
                        Phone Number
                    </Label>
                    <Col sm={10}>
                        <Input
                            id='phoneNum'
                            name='phoneNum'
                            placeholder='Phone Number'
                            type='text'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="checkbox" sm={2}>
                        Appointment Type
                    </Label>
                    <Col sm={10}>
                        <FormGroup check>
                            <Label check>
                                <Input id="checkbox1" type="checkbox" />{' '}
                                In-Person
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input id="checkbox2" type="checkbox" />{' '}
                                Virtual
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input id="checkbox3" type="checkbox" />{' '}
                                Real Estate
                            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ offset: 2, size: 10 }}>
                        <Button type='submit' style={{ backgroundColor: '#561A68' }}>
                            Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}

export default ContactForm