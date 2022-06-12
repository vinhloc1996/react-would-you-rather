import React, { useState } from "react";
import { useEffect } from "react";
import {
  Tabs,
  Tab,
  Form,
  Button,
  Image,
  DropdownButton,
  Dropdown,
  InputGroup,
} from "react-bootstrap";
import { connect } from "react-redux";
import { formatUserId } from "../utils/helpers";

function SignIn(props) {
  const [userId, selectUser] = useState("");
  const [nameExisted, checkName] = useState(false);
  const [avatarURL, setAvatarURL] = useState(null);
  const [avatarSignUp, setAvatarSignUp] = useState(null);
  const [name, setName] = useState("");
  const [tab, changeTab] = useState("signIn");
  const users = Object.values(props.users);
  useEffect(() => {}, [userId, avatarURL]);

  const handleOnChange = (id) => {
    selectUser(id);
    setAvatarURL(users.find((e) => e.id === id).avatarURL);
  };

  const handleOnSelectAvatar = (e) => {
    setAvatarSignUp(e);
  };

  const handleOnChangeName = (name) => {
    setName(name);
    const username = formatUserId(name);
    if (users.some((u) => u.id === username)) {
      checkName(true);
    } else {
      checkName(false);
    }
  };

  return (
    props.loadingBar.default === 0 && (
      <div className="container-sm container-sign-in">
        <h3 className="center-text">
          Please Sign In or Sign Up to continue voting
        </h3>
        <div>
          <Tabs
            defaultActiveKey="signIn"
            activeKey={tab}
            id="signin-tabs"
            className="mb-3"
            onSelect={(k) => changeTab(k)}
          >
            <Tab eventKey="signIn" title="Sign In">
              <div>
                <Form>
                  <Form.Group className="mb-3" controlId="formSignIn">
                    <Form.Select
                      size="sm"
                      onChange={(e) => {
                        handleOnChange(e.target.value);
                      }}
                      id="selectExistedUser"
                      defaultValue={users[0].id}
                    >
                      {users.map((u, i) => (
                        <option key={u.id} value={u.id}>
                          {u.name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <Image
                    className="center"
                    src={avatarURL ?? users[0].avatarURL}
                    alt="User Avatar"
                    roundedCircle={true}
                  />
                  <Button
                    style={{ display: "block" }}
                    variant="primary"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      props.SignIn(
                        document.getElementById("selectExistedUser").value
                      );
                    }}
                  >
                    Sign In
                  </Button>
                </Form>
              </div>
            </Tab>

            <Tab eventKey="signUp" title="Sign Up">
              <InputGroup className="mb-3" size="sm">
                <Form.Control
                  aria-label="Text input with dropdown button"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => handleOnChangeName(e.target.value)}
                  isInvalid={nameExisted}
                />
                {nameExisted && (
                  <Form.Control.Feedback type="invalid">
                    User Name and User Id is existed. Please enter other name!
                  </Form.Control.Feedback>
                )}
                {avatarSignUp !== null && (
                  <Image
                    className="center"
                    src={avatarSignUp}
                    alt="User Avatar"
                    width="32px"
                    height="32px"
                    roundedCircle={true}
                  />
                )}
                <DropdownButton
                  variant="outline-secondary"
                  title="Select Avatar"
                  id="input-group-dropdown-2"
                  align="end"
                  onSelect={handleOnSelectAvatar}
                >
                  <Dropdown.Item eventKey="/avatars/avatar_1.png">
                    <Image
                      src="/avatars/avatar_1.png"
                      roundedCircle={true}
                      width="32px"
                      height="32px"
                    />
                    Avatar 1
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="/avatars/avatar_2.png">
                    <Image
                      src="/avatars/avatar_2.png"
                      roundedCircle={true}
                      width="32px"
                      height="32px"
                    />
                    Avatar 2
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="/avatars/avatar_3.png">
                    <Image
                      src="/avatars/avatar_3.png"
                      roundedCircle={true}
                      width="32px"
                      height="32px"
                    />
                    Avatar 3
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="/avatars/avatar_4.png">
                    <Image
                      src="/avatars/avatar_4.png"
                      roundedCircle={true}
                      width="32px"
                      height="32px"
                    />
                    Avatar 4
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="/avatars/avatar_5.png">
                    <Image
                      src="/avatars/avatar_5.png"
                      roundedCircle={true}
                      width="32px"
                      height="32px"
                    />
                    Avatar 5
                  </Dropdown.Item>
                </DropdownButton>
              </InputGroup>
              <Button
                style={{ display: "block", marginTop: "10px" }}
                disabled={name === "" || nameExisted || avatarSignUp === null}
                variant="primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  props.SignUp(formatUserId(name), name, avatarSignUp);
                  changeTab("signIn");
                  setName("");
                  setAvatarSignUp(null);
                }}
              >
                Sign Up
              </Button>
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  );
}

function mapStateToProps({ users, loadingBar }) {
  return {
    users,
    loadingBar,
  };
}

export default connect(mapStateToProps)(SignIn);
