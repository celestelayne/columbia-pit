import React from "react"

import { Container, Row, Col, Navbar, Nav, Jumbotron, Accordion, Card, Button } from 'react-bootstrap';

import Header from "../components/header"
import Footer from "../components/footer"

import SEO from "../components/seo"

const ResourcesPage = () => (
    <Container>
        <Header />
        <Row>
        <SEO title="Resources" />
            <Col>
                <p>this is the resources page</p>
            </Col>
        </Row>
        <Footer />
    </Container>
)

export default ResourcesPage