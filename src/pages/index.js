import React from "react"
import { Link } from "gatsby"

import { Row, Col, Jumbotron, Accordion, Card, Button } from 'react-bootstrap';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Row>
      <SEO 
        title="Public Interest Technology"
        description="A Graduate Seminar of the computer science, journalism and architecture departments."
        pathname="/" />
      <Col>
            
      <Jumbotron >
        <h2>Public Interest Technology:<br/>
          Cities, Design, Code, Reporting</h2>
        <h4>
          A6883-1, Fall 2020<br/>
          Friday, 11AM - 1PM<br/>
          Office Hours: By appointment or Slack
        </h4>

      </Jumbotron>

      <Accordion>

      {/****** Week One ******/}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Week 01: 09/11/2020 Introduction to Public Interest Technology
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>Faculty &amp; Syllabus Introductions</li>
                <li>Small Group Discussion of Pre-Reading</li>
                <li>Report Back to the Larger Group</li>
                <li>Mini Human Centered Design Exercise</li>
                <li>Introduce PIT <strong>Double Diamond</strong> questions</li>
                <li>Assignment (due next week)</li>
                <ul>
                  <li>Look for examples of technology and interrogate through the lens of PIT Double Diamond questions.</li>
                  <li>Write up design exercise</li>
                </ul>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      {/****** Week Two ******/}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Week 02: 09/18/2020 How I Built This...
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul>
                <li>Student Presentation</li>
                <li>Architecture PIT Example: <em>How I Built This...</em></li>
                <li>Journalism PIT Example: <em>How I Built This...</em></li>
                <li>Q &amp; A: Large Group Discussion</li>
                <li>Faculty Introduces the prompts. Students select their preference.</li>
                <li>Assignment (due next week)</li>
                <ul>
                  <li>Project Groups meet virtually</li>
                  <li>Do background research on chosen topic</li>
                  <li>Write interview questions</li>
                </ul>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      {/****** Week Three ******/}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Week 03: 09/25/2020 Stage 01 - Research
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ul>
                <li>Small Group: Present RESEARCH homework</li>
                <li>Large Group report back</li>
                <li>Lecture: Human Centered Design &amp; HCD Process Walkthrough</li>
                <li>Assignment (due next week)</li>
                <ul>
                  <li className="list-unstyled"><strong>Goals</strong></li>
                  <li>Insights into the domain</li>
                  <li>Insights into the stakeholders (e.g. social workers, librarians…)</li>
                  <li>Determine what has already been done.</li>
                  <li>Determine the gaps</li>
                  <li className="list-unstyled"><strong>Methods</strong></li>
                  <li>Data Gathering</li>
                  <li>Site Analysis</li>
                  <li>Field Work</li>
                  <li>Surveys</li>
                  <li>Ethnography</li>
                  <li>Asset Mapping</li>
                  <li className="list-unstyled"><strong>Questions</strong></li>
                  <li>Are we centralizing people who are normally marginalized by design?</li>
                  <li>Is there existing bias in the data?</li>
                  <li>Who is being included/excluded?</li>
                </ul>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      {/****** Week Four ******/}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Week 04: 10/02/2020 Stage 02 - Engagement
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <ul>
                <li>Small Group: Present ENGAGEMENT homework</li>
                <li>Large Group report back</li>
                <li>Faculty introduces DEFINE homework</li>
                <li>Assignment (due next week)</li>
                <ul>
                  <li className="list-unstyled"><strong>Goals</strong></li>
                  <li>Gather local knowledge, lived experience</li>
                  <li>Establish a common base of knowledge </li>
                  <li className="list-unstyled"><strong>Methods</strong></li>
                  <li>1:1 Conversations</li>
                  <li>Participatory Design Workshops</li>
                  <li>Mental Maps (Kevin Lynch)</li>
                  <li>User Interviews</li>
                  <li>Expert Interviews</li>
                  <li>Co-Design</li>
                  <li>User Journey Maps (storytelling)</li>
                  <li className="list-unstyled"><strong>Questions</strong></li>
                  <li>Is there an established common language?</li>
                  <li>How are we engaging people without access to the internet or smart technologies?</li>
                </ul>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      {/****** Week Five ******/}
      <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Week 05: 10/09/2020 Stage 03 - Define
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <ul>
                <li>Small Group: Present DEFINE homework</li>
                <li>Large Group report back</li>
                <li>Faculty introduces IDEATE homework</li>
                <li>Assignment (due next week)</li>
                <ul>
                  <li className="list-unstyled"><strong>Goals</strong></li>
                  <li>Synthesize ideas (find patterns/label things)</li>
                  <li>Map the  design space / world view</li>
                  <li>Develop your ‘How Might We...’ or “What if…” scenarios</li>
                  <li>Develop a design brief</li>
                  <li className="list-unstyled"><strong>Methods</strong></li>
                  <li>Affinity Diagrams</li>
                  <li>MoSCoW Maps</li>
                  <li className="list-unstyled"><strong>Questions</strong></li>
                  <li>What are the unintended consequences of these ideas?</li>
                  <li>What is the larger systemic issue that this problem sits in?</li>
                  <li>What facets of the larger problem are being overlooked?</li>
                </ul>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        
      {/****** Week Six ******/}
      <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
              Week 06: 10/16/2020 Stage 04 - Ideate
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <ul>
                <li>Small Group: Present IDEATE homework</li>
                <li>Large Group report back</li>
                <li>Faculty introduces PROTOTYPE homework</li>
                <li>Assignment (due next week)</li>
                <ul>
                  <li className="list-unstyled"><strong>Goals</strong></li>
                  <li>Come up with multiple, diverse ideas</li>
                  <li>Involve all stakeholders</li>
                  <li>Democratic process to represent participant’s ideas and perspectives  are reflected </li>
                  <li>No idea is too radical.</li>
                  <li className="list-unstyled"><strong>Methods</strong></li>
                  <li>System Diagrams</li>
                  <li>Maps</li>
                  <li>Data Visualizations</li>
                  <li className="list-unstyled"><strong>Questions</strong></li>
                  <li>What is the larger systemic issue that this problem sits in?</li>
                  <li>What facets of the larger problem are being overlooked?</li>
                </ul>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      {/****** Week Seven ******/}
      <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="6">
              Week 07: 10/23/2020 Stage 05 - Prototype
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              <ul>
                <li>Small Group: Present PROTOTYPE homework</li>
                <li>Large Group report back</li>
                <li>Faculty introduces TEST homework</li>
                <li>Assignment (due next week)</li>
                <ul>
                  <li className="list-unstyled"><strong>Goals</strong></li>
                  <li>Understand whether these ideas can be implemented</li>
                  <li>You  must have design alternatives</li>
                  <li className="list-unstyled"><strong>Methods</strong></li>
                  <li>Schematic</li>
                  <li>Pen &amp; Paper</li>
                  <li>Storytelling</li>
                  <li>Narrative</li>
                  <li>Medium (app, map, website, sensor, algorithm, process, system, etc...)</li>
                  <li>Simulate</li>
                  <li className="list-unstyled"><strong>Questions</strong></li>
                  <li>Tech Risk Zones (surveillance, privacy, disinformation.)</li>
                  <li>What are the unintended consequences of these ideas?</li>
                </ul>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      {/****** Week Eight ******/}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="7">
              Week 08: 10/30/2020 Stage 06 - Test
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
              <ul>
                <li>Small Group: Present TEST homework</li>
                <li>Large Group report back</li>
                <li>Assignment (due next week)</li>
                <ul>
                  <li className="list-unstyled"><strong>Goals</strong></li>
                  <li>Evaluate the effectiveness of various prototypes</li>
                  <li>Further understand the domain and interaction with the community</li>
                  <li className="list-unstyled"><strong>Methods</strong></li>
                  <li>Accessibility</li>
                  <li>A/B Testing</li>
                  <li>Usability Audit (Jakob Nielsen)</li>
                  <li>Hallway Testing (intercept)</li>
                  <li>Eye Tracking</li>
                  <li>Think Aloud Protocol</li>
                  <li>Make sure the testing audience reflects the user audience</li>
                  <li>Go beyond clickbait (performance metrics, usability metrics, engagement metrics..?)</li>
                  <li className="list-unstyled"><strong>Questions</strong></li>
                  <li>Evaluation based on Tech Risk Zones (surveillance, privacy, disinformation, etc…)</li>
                  <li>What is the value system implied by the test?</li>
                </ul>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      {/****** Week Nine ******/}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="8">
              Week 09: 11/06/2020 Iterate &amp; Test
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="8">
            <Card.Body>
              <p>Studio Time</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      {/****** Week Ten ******/}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="9">
              Week 10: 11/13/2020 Iterate &amp; Test
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="9">
            <Card.Body>
              <p>Studio Time</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      {/****** Week Eleven ******/}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="10">
              Week 11: 11/20/2020 Write Up
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="10">
            <Card.Body>
              <p>Studio Time</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      {/****** Week Twelve ******/}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="11">
              Week 12: 11/27/2020 No Class -- Thanksgiving Holiday
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="11">
            <Card.Body>
              <p>No Class -- Thanksgiving Holiday</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      {/****** Week Thirteen ******/}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="12">
              Week 13: 12/04/2020 Write Up
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="12">
            <Card.Body>
              <p>Studio Time</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      {/****** Week Fourteen ******/}
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="12">
              Week 14: 12/11/2020 Final Presentations
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="12">
            <Card.Body>
              <p>Final Presentations</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      </Accordion>
      
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
