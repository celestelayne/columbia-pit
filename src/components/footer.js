import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Navbar } from 'react-bootstrap';

const Footer = ({ siteTitle }) => (
  <Navbar className="footer" fixed="bottom" expand="lg" variant="light">
      <Navbar.Text>
        © {new Date().getFullYear()}. Built with &#x1F5A4; &nbsp; in <a target="_blank" href="https://www.google.com/maps/place/Augusta,+GA/data=!4m2!3m1!1s0x88f9d097160baa41:0x3ee78afde3aa0be4?sa=X&ved=2ahUKEwjYw7_UqbzrAhXmdN8KHT-kCZUQ8gEwGXoECB0QBg">Augusta, GA</a>
      </Navbar.Text>
                
          
  </Navbar>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
