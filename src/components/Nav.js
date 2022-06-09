import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar(props) {
  return (
    <Navbar>
      <Container>
        {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#addquestion">New Question</Nav.Link>
          <Nav.Link href="#leaderboard">Leader Board</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        {props.authedUser && (
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">User</a>
            </Navbar.Text>
            |
            <Navbar.Text>
              <a href="#login">Sign Out</a>
            </Navbar.Text>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
}

export default NavBar;
