import React from "react";
import {Link , useNavigate} from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useSelector } from "react-redux";

import firebase from "../firebase.js";

function Heading() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const LogoutHandler = () => {
    firebase.auth().signOut();
    navigate("/");

  };
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">React-Community</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             
             
            
            <Link to="/" style={{ color: "white", textDecoration:"none", marginRight: "10px",}}>home</Link>
            
           
            <Link to="/upload" style={{ color: "white", textDecoration:"none", marginRight: "10px",}}>upload</Link>
            
            
            
           
                 
                

                
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {user.accessToken ? (<Navbar.Text style={{color: "white", cursor:"pointer"}} onClick={() => LogoutHandler()}>Logout</Navbar.Text>) : (<Link to="/login" style={{ color: "white", textDecoration:"none",}}>login</Link>)}
       
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
            
       
    );
    }

    export default Heading;