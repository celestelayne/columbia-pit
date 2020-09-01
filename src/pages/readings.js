import React from "react"

import { Container, Row, Col, CardColumns, Card } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

import Header from "../components/header"
import Footer from "../components/footer"

import SEO from "../components/seo"

const ReadingsPage = () => (
    
    <Container>
        <Header />
        <Row>
            <SEO title="Readings" />
            <Col>
                <CardColumns>
                    <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Palaces for the People: how social infrastructure can help fight inequality, polarization, and the decline of civic life</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">by Eric Klinenberg</Card.Subtitle>
                        <Card.Text>
                            <ul>
                                <li>Introduction: The Social Infrastructure</li>
                                <li>Chapter 1: A place to gather</li>
                                <li>Conclusion: Before We Lift the Next Shovel</li>
                            </ul>
                        </Card.Text>
                        <Card.Link target="_blank" href="https://clio.columbia.edu/catalog/14891763">CU Library <Icon.ArrowRight /></Card.Link>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>The Design of Everyday Things</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">by Don Norman</Card.Subtitle>
                        <Card.Text>
                            <ul>
                                <li>Chapter 1: The Psychopathology of Everyday Things</li>
                                <li>Chapter 6: Design Thinking </li>
                            </ul>
                        </Card.Text>
                        <Card.Link target="_blank" href="https://clio.columbia.edu/catalog/14919443?counter=1">CU Library <Icon.ArrowRight /></Card.Link>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Library as Infrastructure</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">by Shannon Mattern. Places Journal. June 2014</Card.Subtitle>
                        <Card.Text>
                        Reading room, social service center, innovation lab. How far can we stretch the public library?
                        </Card.Text>
                        <Card.Link target="_blank" href="https://placesjournal.org/article/library-as-infrastructure/">Places Journal <Icon.ArrowRight /></Card.Link>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Fugitive Libraries</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">by Shannon Mattern. Places Journal. October 2019</Card.Subtitle>
                        <Card.Text>
                        Public libraries may be a democratic commons, but they have often excluded Black voices and perspectives. Communities have responded by creating their own independent, itinerant libraries — spaces for learning together and building futures together.
                        </Card.Text>
                        <Card.Link href="https://placesjournal.org/article/fugitive-libraries/">Places Journal <Icon.ArrowRight /></Card.Link>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Race After Technology: abolitionist tools for the new Jim code</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">by Ruha Benjamin</Card.Subtitle>
                        <Card.Text>
                            <ul>
                                <li>Introduction: The New Jim Code </li>
                                <li>Chapter 5: Retooling Solidarity, Reimagining Justice </li>
                            </ul>
                        </Card.Text>
                        <Card.Link target="_blank" href="https://clio.columbia.edu/catalog/14893196?counter=1">CU Library <Icon.ArrowRight /></Card.Link>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Libraries Must Change</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">by Anthony W. Marx (President of the New York Public Library) New York Times, Opinion. May 28 2020</Card.Subtitle>
                        <Card.Text>
                        To stay true to their mission during the coronavirus pandemic, libraries should offer more digital services.
                        </Card.Text>
                        <Card.Link href="https://www.nytimes.com/2020/05/28/opinion/libraries-coronavirus.html">New York Times <Icon.ArrowRight /></Card.Link>
                    </Card.Body>
                    </Card>
                </CardColumns>

            </Col>
        </Row>
        <Footer />
    </Container>
)

export default ReadingsPage