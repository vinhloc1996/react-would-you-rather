import React, { useEffect, Fragment } from "react";
import { handleInitUserData } from "../actions/share";
import { connect } from "react-redux";
import NavBar from "./Nav";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./HomePage";
import QuestionPage from "./QuestionPage";
import NotFound from "./NotFoundPage";
import Leaderboard from "./LeaderboardPage";
import Profile from "./Profile";
import AddQuestion from "./AddQuestionPage";

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
          <Route exact path="/" element={<Home />} />
          <Route path="/question/:id" element={<QuestionPage />} />
          <Route path="/add" element={<AddQuestion />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default connect()(App);
