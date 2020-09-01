import React from "react"

import { Container, Row, Col, Card } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

import Header from "../components/header"
import Footer from "../components/footer"

import SEO from "../components/seo"

const FacultyPage = () => (
    
    <Container>
        <Header />
        <Row style={{ paddingBottom: 60 }}>
            <Col>
                <h2>Architecture</h2>
                <Card style={{ width: '18rem', marginBottom: 20 }}>
                    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Laura_Kurgan.jpg" />
                    <Card.Body>
                        <Card.Title>Laura Kurgan</Card.Title>
                        <Card.Text>
                        Professor of Architecture, <a target="_blank" href="https://www.arch.columbia.edu/">GSAPP</a><br/>
                        Director, <a target="_blank" href="https://c4sr.columbia.edu/">Center for Spatial Research</a><br/>
                        <Card.Link href="ljk33@columbia.edu"><Icon.Envelope />&nbsp;ljk33@columbia.edu</Card.Link>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/54b75636e4b06856870d8dcb/1567616054015-92TM8UM2OZXQY15SIOMD/ke17ZwdGBToddI8pDm48kG4ffU8i_jchXCs4GHrUOfF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UasN72TZ-3rxyJeQx85D5zuebqbZD39vR-NsbRfNIN313EdblWqHU_s6Wa6WjUIrhA/IMG_0125.jpg" />
                    <Card.Body>
                        <Card.Title>Celeste Layne</Card.Title>
                        <Card.Text>
                        Adjunct Associate Professor, <a target="_blank" href="https://www.arch.columbia.edu/">GSAPP</a><br/>
                        <Card.Link href="cl2754@columbia.edu"><Icon.Envelope />&nbsp;cl2754@columbia.edu</Card.Link>
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
                        Assistant Professor of Computer Science, <a href="https://www.engineering.columbia.edu/faculty/lydia-chilton">Columbia School of Engineering</a><br/>
                        <Card.Link href="chilton@cs.columbia.edu"><Icon.Envelope />&nbsp;chilton@cs.columbia.edu</Card.Link>
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
                        Professor, <a href="https://journalism.columbia.edu/faculty/mark-hansen">Graduate School of Journalism</a>, Columbia University<br/>
                        Director, <a href="https://brown.columbia.edu/">The Brown Institute For Media Innovation</a><br/>
                        <Card.Link href="mh3287@columbia.edu"><Icon.Envelope />&nbsp;mh3287@columbia.edu</Card.Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Footer />
    </Container>
)

export default FacultyPage