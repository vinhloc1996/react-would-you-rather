import React from "react";
import { Card, Alert, Badge, ProgressBar } from "react-bootstrap";
import { connect } from "react-redux";

function answeredQuestion(props) {
  const { question, authedUser } = props;

  if (question === null) {
    return <p>This question doesn't exist</p>;
  }

  const {
    optionOneText,
    optionTwoText,
    totalAnswer,
    totalAnswer1,
    totalAnswer2,
    optionOneVotes,
  } = question;

  const percentage1 = Math.round((totalAnswer1 / totalAnswer) * 100);
  const percentage2 = 100 - percentage1;
  const yourVote = optionOneVotes.includes(authedUser.id)
    ? "optionOne"
    : "optionTwo";

  return (
    <Card.Body>
      <Card.Title>Results:</Card.Title>
      <Alert variant={yourVote === "optionOne" ? "success" : "light"}>
        <Alert.Heading>
          {`Would you rather ${optionOneText}?`}
          {yourVote === "optionOne" ? (
            <Badge pill bg="primary">
              Your vote
            </Badge>
          ) : null}
        </Alert.Heading>
        <ProgressBar now={percentage1} animated label={`${percentage1}%`} />
        <p>{`${totalAnswer1} out of ${totalAnswer} votes`}</p>
      </Alert>
      <hr />
      <Alert variant={yourVote === "optionTwo" ? "success" : "light"}>
        <Alert.Heading>
          {`Would you rather ${optionTwoText}?`} {"   "}
          {yourVote === "optionTwo" ? (
            <Badge pill bg="primary">
              Your vote
            </Badge>
          ) : null}
        </Alert.Heading>
        <ProgressBar now={percentage2} animated label={`${percentage2}%`} />
        <p>{`${totalAnswer2} out of ${totalAnswer} votes`}</p>
      </Alert>
    </Card.Body>
  );
}

function mapStateToProps({ authedUser }, { question }) {
  return {
    authedUser,
    question,
  };
}

export default connect(mapStateToProps)(answeredQuestion);
