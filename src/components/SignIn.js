import React, { useState } from "react";
import { Tabs, Tab, Form, Button, Image } from "react-bootstrap";
import { connect } from "react-redux";

function SignIn(props) {
  const [userId, selectUser] = useState(null);
  const handleOnChange = (id) => {
    selectUser(id);
  };
  
  const [username, addUser] = useState('');
  const handleNewUser = (text) => {
    addUser(text)
  };

  return (
    <div>
      <h3 className="center-text">
        Please Sign In or Sign Up to continue voting
      </h3>
      <Tabs defaultActiveKey="signIn" id="signin-tabs" className="mb-3">
        <Tab eventKey="signIn" title="Sign In">
          <div>
            <Form>
              <Form.Group className="mb-3" controlId="formSignIn">
                <Form.Label>Choose User to Sign In</Form.Label>
                <Form.Select
                  size="sm"
                  onChange={(e) => handleOnChange(e.target.value)}
                ><option>Choose user to sign in</option>
                  {Object.values(props.users).map((u) => (
                    <option key={u.id} value={u.id}>{u.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Button
                disabled={userId === null}
                variant="primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  props.SignIn(userId);
                }}
              >
                Sign In
              </Button>
            </Form>
          </div>
        </Tab>
        <Tab eventKey="signUp" title="Sign Up">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>
            <Button
              disabled={userId === null}
              variant="primary"
              type="submit"
              onClick={(e) => {e.preventDefault()}}
            >
              Sign In
            </Button>
            {/* <Form.Group className="mb-3" controlId="formSignUp">
              <Form.Label>Choose User to Sign In</Form.Label>
              <Form.Select size="sm">
                <option key="avatar_1">
                  <Image
                    roundedCircle={true}
                    src={`${process.env.PUBLIC_URL}/avatars/avatar_1`}
                    alt="User Avatar 1"
                  />
                </option>
                <option key="avatar_2">
                  <Image
                    roundedCircle={true}
                    src={`${process.env.PUBLIC_URL}/avatars/avatar_2`}
                    alt="User Avatar 2"
                  />
                </option>
                <option key="avatar_3">
                  <Image
                    roundedCircle={true}
                    src={`${process.env.PUBLIC_URL}/avatars/avatar_3`}
                    alt="User Avatar 3"
                  />
                </option>
                <option key="avatar_4">
                  <Image
                    roundedCircle={true}
                    src={`${process.env.PUBLIC_URL}/avatars/avatar_4`}
                    alt="User Avatar 4"
                  />
                </option>
                <option key="avatar_5">
                  <Image
                    roundedCircle={true}
                    src={`${process.env.PUBLIC_URL}/avatars/avatar_5`}
                    alt="User Avatar 5"
                  />
                </option>
              </Form.Select>
            </Form.Group> */}
          </Form>
        </Tab>
      </Tabs>
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(SignIn);
