import React from "react"

import { Container, Row, Col, Navbar, Nav, Jumbotron, Accordion, Card, Button } from 'react-bootstrap';

const ResourcesPage = () => (
    <Container>
                <Row>
            <Col>
        <Navbar expand="lg" variant="light" bg="primary">
            <Navbar.Brand href="/">PIT</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/readings/">Readings</Nav.Link>
            <Nav.Link href="/resources/">Resources</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="#students">Students</Nav.Link>
            <Nav.Link eventKey={2} href="#syllabus">
                Syllabus
            </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        <p>this is the resources page</p>
        </Col>
        </Row>
    </Container>
)

export default ResourcesPage