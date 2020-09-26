import React from 'react';
import { Container, Col } from 'react-bootstrap';
import './style.css';

// import landingA from '../../Assets/Images/landing1.jpg';
// import landingB from '../../Assets/Images/landing2.jpg';

const Landing = () => {
    return (
        <div className="landing">
            {/* <img src={landingA} className="landing_image" alt="landing image" /> */}
            <Col md={6} className="landing_info">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Col>
        </div >
    );
}

const Featuring = () => {
    return (
        <Container>

        </Container>
    )
}

const Contact = () => {
    return (
        <Container>
            <h2>Contact Us</h2>
            <div className="contact_box">
                <input placeholder="Name"></input>
                <input placeholder="Email"></input>
                <input placeholder="Subject"></input>
                <input placeholder="Message"></input>
                <input type="button" value="SEND" />
            </div>
        </Container>
    );
}

const Home = () => {
    return (
        <div className="home">
            <Landing />
            <div className="section_divider" />
            <Featuring />
            <Contact />
        </div>
    );
};

export default Home;