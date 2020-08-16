import React from "react"

import { Container, Row, Col, Navbar, Nav, CardColumns, Card } from 'react-bootstrap';

import SEO from "../components/seo"

const ReadingsPage = () => (
    <Container>
        <Row>
        <SEO title="Readings" />
            <Col>
                <Navbar fixed="top" expand="lg" variant="light" bg="primary">
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

                <CardColumns>
                    <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Palaces for the People</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Eric Klinenberg</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Design of Everyday Things</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Don Norman</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Library as Infrastructure</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Shannon Mattern. Places Journal. June 2014</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Fugitive Libraries</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Shannon Mattern. Places Journal. October 2019</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Building the People’s Wifi</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Greta Byrum. Urban Omnibus.</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Community Networking for Healing and Power in Central Appalachia</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Greta Byrum and Ever Bussey. Global Media Technologies &amp; Cultures Lab.</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                    </Card.Body>
                    </Card>
                </CardColumns>

            </Col>
        </Row>
        
        
    </Container>
)

export default ReadingsPage