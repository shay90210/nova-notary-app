import { Col, Row } from 'reactstrap';

export const HomePage = () => {
    return (
        <div>
            <section
                style={{
                    backgroundColor: 'lavender'
                }}
            >
                <h1 className='main-title'>Nova Notary</h1>
                <h2 className='main-subtitle'>Connect with us to take care of your notary needs today!</h2>
            </section>

            <section>
                <h2 className='about-us-title'>ABOUT US</h2>
                <Row>
                    <Col>
                        <p className='about-us-paragraph'>
                            Nova Notary is a new company officially launched in August 2022. We currently
                            offer mobile and signing agent services at this time. I am seeking to expan to
                            Online Notary Services soon. My company is based off of faith, honesty,
                            integrity, and compassion. Stay tuned for more updates as we continue to grow!
                            <br />
                            <br />
                            Stay blessed!
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img
                            src='/imgs/MicrosoftTeams-image (12).png'
                            alt='certification stamp'
                            width='300px'
                            className='approval-star'
                            style={{
                                margin: 'auto',
                                display: 'block'
                            }}
                        />
                    </Col>
                    <Col>
                        <img
                            src='/imgs/pngegg.png'
                            alt='gold certification star indicating certified approval'
                            width='300px'
                            className='approval-star'
                            style={{
                                margin: 'auto',
                                display: 'block'
                            }}
                        />
                    </Col>
                    <Col>
                        <img
                            src='/imgs/MicrosoftTeams-image (11).png'
                            alt='certification of approval'
                            width='300px'
                            className='approval-star'
                            style={{
                                margin: 'auto',
                                display: 'block'
                            }}
                        />
                    </Col>
                </Row>
            </section>
        </div>
    );
}
