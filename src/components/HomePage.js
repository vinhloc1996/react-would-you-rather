import React from "react";
import { connect } from "react-redux";
import SignIn from "./SignIn";
import { handleInitialData } from "../actions/share";
import { handleAddUser } from "../actions/users";
import Dashboard from "./Dashboard";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home(props) {
  const { users, authedUser } = props;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (authedUser !== null) {
      navigate(location.state?.path || "/")
    }
  }, [authedUser, location.state?.path, navigate])

  const handleSignIn = (id) => {
    let user = Object.values(users).find((u) => u.id === id);
    if (user !== null) {
      props.dispatch(handleInitialData(user));
    } else {
      alert("Authentication failed! Try again");
    }
  };

  const handleSignUp = (id, name, avatarURL) => {
    props.dispatch(handleAddUser({ id, name, avatarURL }));
  };

  return (
    <div>
      {authedUser === null && (
        <SignIn
          SignIn={handleSignIn}
          SignUp={handleSignUp}
          state={{ path: location.pathname }}
        />
      )}
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
