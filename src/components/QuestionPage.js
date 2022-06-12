import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Question from "./Question";

function QuestionPage(props) {
  const { id } = useParams();

  if (id === null) {
    return (
      <div>
        <h3>Invalid question. Please go back and try another one!</h3>
      </div>
    );
  }

  return (
    <div className="container-sm container-sign-in">
      <Question id={id} />
    </div>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(QuestionPage);
