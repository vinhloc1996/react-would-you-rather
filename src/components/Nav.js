import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  let navigate = useNavigate();

  const handleLoggout = () => {
    props.dispatch(setAuthedUser(null));
    return navigate("/");
  };

  const userStyle = {};

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
              Signed in as:
              <a
                href="#login"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  marginRight: "13px",
                  marginLeft: "10px",
                }}
              >
                <Image
                  src={props.authedUser.avatarURL}
                  roundedCircle={true}
                  width="32px"
                  height="32px"
                />
                {props.authedUser.name}
              </a>
            </Navbar.Text>

            <Navbar.Text>
              <a
                href="#login"
                style={{ textDecoration: "none" }}
                onClick={(e) => {
                  e.preventDefault();
                  handleLoggout();
                }}
              >
                Sign Out
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NavBar);
