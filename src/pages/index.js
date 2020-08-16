import React from "react"
import { Link } from "gatsby"

import { Container, Row, Col, Navbar, Nav, Jumbotron, Accordion, Card, Button } from 'react-bootstrap';

// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Container>
    <Row>
      <SEO title="Home" />
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
            
      <Jumbotron>
        <h2>Public Interest Technology:<br/>
          Cities, Design, Code, Reporting</h2>
        <p>
          A6883-1, Fall 2020<br/>
          Friday, 11AM - 1PM<br/>
          Instructor: Laura Kurgan<br/>
          Office Hours: By appointment or Slack
        </p>

      </Jumbotron>

      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Week 01: 09/11/2020 Introduction
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>Faculty &amp; Syllabus Introductions</li>
                <li>Small Group reading discussion</li>
                <li>Large Group report back</li>
                <li>Lecture: Human Centered Design &amp; HCD Process Walkthrough</li>
                <li>Assignments due next week</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Week 02: 09/18/2020 Public Interest Technology
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul>
                <li>Faculty &amp; Syllabus Introductions</li>
                <li>Small Group reading discussion</li>
                <li>Large Group report back</li>
                <li>Lecture: Human Centered Design &amp; HCD Process Walkthrough</li>
                <li>Assignments due next week</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Week 03: 09/25/2020 Stage 01 Design Process - Understand
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ul>
                <li>Faculty &amp; Syllabus Introductions</li>
                <li>Small Group reading discussion</li>
                <li>Large Group report back</li>
                <li>Lecture: Human Centered Design &amp; HCD Process Walkthrough</li>
                <li>Assignments due next week</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Navbar sticky="bottom" expand="lg" variant="light" bg="light">
        <footer>
          <Navbar.Brand href="#">Back to top</Navbar.Brand>
        </footer>
      </Navbar>
      
      </Col>
    </Row>
  </Container>
)

export default IndexPage
