import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

const Navbar = () => {
    return (
        <Container fluid>
            <Row className="navbar">
                <Col className="t" sm={2}> Yala Fashions</Col>
                <Col className="links"  >
                    <ul reversed>
                        <li><Link to='/'> Home </Link></li>
                        <li><Link to='/products'> Products </Link></li>
                        <li><Link to='/about'> About </Link></li>
                    </ul>
                </Col>
            </Row>
        </Container >
    );
}

export default Navbar;