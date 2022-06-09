import React, { useEffect } from "react";
import { handleInitialData, handleInitUserData } from "../actions/share";
import SignIn from "./SignIn";
import { getUser } from "../utils/api";
import { connect } from "react-redux";
import NavBar from "./Nav";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitUserData());
  }, []);

  const handleSignIn = (id) => {
    getUser(id).then((user) => {
      if (user !== null) {
        props.dispatch(handleInitialData(user));
      } else {
        alert("Authentication failed! Try again");
      }
    });
  };
  
  return (
    <>
      <NavBar />
      {props.authedUser === null && <SignIn SignIn={handleSignIn} />}
      <div>Hello</div>
    </>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser
  };
}

export default connect(mapStateToProps)(App);
