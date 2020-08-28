import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Container, Row, Col, Navbar, Nav, Jumbotron, Accordion, Card, Button } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <Navbar sticky="top" expand="lg" variant="light" >
    <Navbar.Brand href="/">PIT</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/readings/">Readings</Nav.Link>
      <Nav.Link href="/resources/">Resources</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link href="/faculty/">Faculty</Nav.Link>
      <Nav.Link href="#students">Students</Nav.Link>
      <Nav.Link eventKey={2} href="#syllabus">
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
