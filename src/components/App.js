import React, { useEffect, Fragment } from "react";
import { handleInitUserData } from "../actions/share";
import { connect } from "react-redux";
import NavBar from "./Nav";
import LoadingBar from "react-redux-loading";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./HomePage";
import QuestionPage from "./QuestionPage";
import NotFound from "./NotFoundPage";
import Leaderboard from "./LeaderboardPage";
import AddQuestion from "./AddQuestionPage";

function App(props) {
  const { dispatch } = props;

  useEffect(() => {
    dispatch(handleInitUserData());
  }, [dispatch]);

  return (
    <Router>
      <Fragment>
        <LoadingBar />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/questions/:id" element={<QuestionPage />} />
          <Route path="/add" element={<AddQuestion />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default connect()(App);
