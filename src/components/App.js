import React, { useEffect, Fragment } from "react";
import { handleInitUserData } from "../actions/share";
import { connect } from "react-redux";
import NavBar from "./Nav";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./HomePage";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitUserData());
  }, [props]);

  return (
    <Router>
      <Fragment>
        <LoadingBar />
        <NavBar />
        <Routes>
          <Route exact path="/" element={(<Home/>)}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default connect()(App);
