import React from 'react';
import { Container } from 'react-bootstrap';
import mountain from '../../Assets/Images/Nepal.jpg';
import './style.css';

const About = () => {
    return (
        <Container>
            <div className="about_box">
                <h3>Yala Fashions</h3>
                <p>
                    A devastating earthquake struck Nepal in 2015. A lot of people lost their lives, homes, and jobs. We felt the need to help, so we started Yala Fashion. Our goal was to support all the local businesses in Nepal. Therefore, we decided to import all our products from Nepal. They are all hand made with care by experienced local skill workers who are experts in their field. The offshore importing idea allowed us to help existing business from closing, while also creating new jobs in the community. All of this was made possible through unity. It would not have been possible without the help of our manufacturers, suppliers, partners, and especially our customers. We appreciate the continued support and look forward to providing you quality products all year long.
                </p>
                <p>
                    We sell custom knitwear, shawls, and accessories made using high-quality fibers of cashmere, silk, bamboo, merino, mohair, hemp, and other quality materials. We get them from different manufacturers in Kathmandu and run a quality control check before shipping it to our New York Office. We aim to help small businesses in Nepal while providing quality fashion and services that meet our customers’ satisfaction.
                </p>
                <img src={mountain} alt="Mountain Annapurna"></img>
            </div>

        </Container>
    );
};

export default About;