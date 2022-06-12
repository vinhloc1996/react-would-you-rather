import React from "react";
import { connect } from "react-redux";
import SignIn from "./SignIn";
import { handleInitialData } from "../actions/share";
import Dashboard from "./Dashboard";

function Home(props) {
  const { users, authedUser } = props;
  const handleSignIn = (id) => {
    let user = Object.values(users).find((u) => u.id === id);
    if (user !== null) {
      props.dispatch(handleInitialData(user));
    } else {
      alert("Authentication failed! Try again");
    }
  };

  return (
    <div>
      {authedUser === null && <SignIn SignIn={handleSignIn} />}
      {authedUser !== null && <Dashboard />}
    </div>
  );
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(Home);
