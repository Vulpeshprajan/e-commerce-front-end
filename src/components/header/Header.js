import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <div>
          <Navbar collapseOnSelect bg="info" expand="md">
                <Container >
              
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
      <Nav.Link>Log Out</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Header
