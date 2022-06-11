import React from "react";
import { connect } from "react-redux";
import SignIn from "./SignIn";
import { handleInitialData } from "../actions/share";
import { getUser } from "../utils/api";
import Dashboard from "./Dashboard";

function Home(props) {
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
        <div>
            {props.authedUser === null && <SignIn SignIn={handleSignIn} />}
            {props.authedUser !== null && <Dashboard />}
        </div>
    )
}

function mapStateToProps({ authedUser, users }) {
    return {
      authedUser,
      users
    };
  }

export default connect(mapStateToProps)(Home);