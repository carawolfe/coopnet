import React, { Component } from 'react';
import '../stylesheets/App.css';
import { Container, Col, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Table, Jumbotron, Tab, Card, Image, ListGroup} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
//import Image from 'react-bootstrap/Image'
//import ListGroup from 'react-bootstrap/ListGroup'


import Footer from "../components/Footer.js"
import CarouselSlider from "../components/CarouselSlider.js"
import NavHeader from "../components/NavHeader.js"


class CoopTalk extends Component {
    render() {
      return (
      <div>
      <div class="App">
      <NavHeader />


       <Container>
       <Row>
               <Col>
               <p>
               </p>
           <h1>CoopTalk</h1>

                          </Col>
                        </Row>
       </Container>
       <Container>
                 <Row>
                   <Col><Jumbotron className="introJumbo" fluid>
                     <h2>Our Mission</h2>
                     <p>
                       Our Mission is to make affordable cooperative housing accessible for everyone.
                     </p>

                   </Jumbotron></Col>
                 </Row>
        </Container>


        </div>

        <div ref="footer">
        <Footer/>
        </div>
        </div>
   );
}
}


export default CoopTalk;
