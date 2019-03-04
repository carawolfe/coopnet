import React, { Component } from 'react';
import '../stylesheets/App.css';
import { ProgressBar, Container, Col, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Table, Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
class NavHeader extends Component {
    render() {
        return (
            <Navbar sticky="top" bg="light" expand="md">
            <NavLink to="/"><Navbar.Brand className="homeNav" href="/">CoopNet</Navbar.Brand></NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="headerCollapse" id="basic-navbar-nav">
              <Nav className="mr-auto">
              <NavLink to="/"><Button variant="light">Projects</Button></NavLink>
                <NavLink to="/"><Button variant="light">For Investors</Button></NavLink>
                <Button variant="light"><NavDropdown title="About Us" id="basic-nav-dropdown">
                <NavLink to="/"><NavDropdown.Item href="#action/3.4">About Us</NavDropdown.Item></NavLink>
                  <NavDropdown.Divider />
                  <NavLink to="/"><NavDropdown.Item>Our Mission</NavDropdown.Item></NavLink>
                  <NavLink to="/"><NavDropdown.Item href="#action/3.2">Our Process</NavDropdown.Item></NavLink>
                  <NavLink to="/"><NavDropdown.Item href="#action/3.3">Our Team</NavDropdown.Item></NavLink>
                  </NavDropdown></Button>
                <NavLink to="/signup"><Button variant="light">Sign Up</Button></NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
   );
}
}

export default NavHeader;
