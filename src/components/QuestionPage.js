import React from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";

function QuestionPage(props) {
  const { question, id, authedUser } = props;
  const {
    hasAnswered,
    optionOneText,
    optionTwoText,
    name,
    avatarURL,
    timestamp,
    totalAnswer,
    totalAnswer1,
    totalAnswer2,
  } = question;

  if (question === null) {
    return (
      <div>
        <h3>Invalid question. Please go back and try another one!</h3>
      </div>
    );
  }

  return hasAnswered ? (<div>Answered</div>) : (<div>Unanswered</div>)
}

function mapStateToProps({ authedUser, questions, users }, { match }) {
  const { id } = match.params;

  return {
    id,
    authedUser,
    question: questions[id]
      ? formatQuestion(users[questions[id].author], questions[id], authedUser)
      : null,
  };
}

export default connect()(QuestionPage);
