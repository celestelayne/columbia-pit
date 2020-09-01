import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Container, Row, Col, Navbar, Nav, Jumbotron, Accordion, Card, Button } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <Navbar sticky="top" expand="lg" variant="light" >
    <Navbar.Brand href="/columbia-pit/">PIT</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/columbia-pit/readings/">Readings</Nav.Link>
      <Nav.Link href="/columbia-pit/resources/">Resources</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link href="/columbia-pit/faculty/">Faculty</Nav.Link>
      <Nav.Link href="#students">Students</Nav.Link>
      <Nav.Link eventKey={2} target="_blank" href="https://drive.google.com/drive/folders/1uV92gP-SR7WHjcvaqiiBSxIQV4WEtHVx?usp=sharing">
        Syllabus
      </Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
