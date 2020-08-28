import React from "react"

import { Container, Row, Col, Navbar, Nav, CardColumns, Card } from 'react-bootstrap';

import Header from "../components/header"
import Footer from "../components/footer"

import SEO from "../components/seo"

const FacultyPage = () => (
    
    <Container>
        <Header />
        <Row>
            <Col>
                <h2>Architecture</h2>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Laura_Kurgan.jpg" />
                    <Card.Body>
                        <Card.Title>Laura Kurgan</Card.Title>
                        <Card.Text>
                        Professor of Architecture, GSAPP<br/>
                        Director, Center for Spatial Research<br/>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/54b75636e4b06856870d8dcb/1567616054015-92TM8UM2OZXQY15SIOMD/ke17ZwdGBToddI8pDm48kG4ffU8i_jchXCs4GHrUOfF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UasN72TZ-3rxyJeQx85D5zuebqbZD39vR-NsbRfNIN313EdblWqHU_s6Wa6WjUIrhA/IMG_0125.jpg" />
                    <Card.Body>
                        <Card.Title>Celeste Layne</Card.Title>
                        <Card.Text>
                        Adjunct Associate Professor, GSAPP
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <h2>Computer Science</h2>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://magazine.engineering.columbia.edu/files/seas/content/news_teaser_image/2018/19/chilton.jpg" />
                    <Card.Body>
                        <Card.Title>Lydia Chilton</Card.Title>
                        <Card.Text>
                        Assistant Professor of Computer Science, Columbia School of Engineering<br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
            <h2>Journalism</h2>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://biocomplexity.virginia.edu/system/files/public/staff/cv/markhansenpicforweb.png" />
                    <Card.Body>
                        <Card.Title>Mark Hansen</Card.Title>
                        <Card.Text>
                        Professor, Graduate School of Journalism, Columbia University<br/>
                        Director, The Brown Institute For Media Innovation<br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Footer />
    </Container>
)

export default FacultyPage