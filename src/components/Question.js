import React from "react";
import { Button, Image, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import LastSeen from "./LastSeen";

function Question(props) {
  const { question } = props;

  if (question === null) {
    return <p>This question doesn't exist</p>;
  }

  const { name, avatarURL, timestamp, id, optionOneText, optionTwoText } =
    question;

  return (
    <div>
      <Card className="text-center">
        <Card.Header>
          <Image
            src={avatarURL}
            alt="Author Avatar"
            width="40px"
            height="40px"
          />
          {name} asked:
        </Card.Header>
        <Card.Body>
          <Card.Title>Would you rather ...</Card.Title>
          <Card.Text>{`${optionOneText} OR ${optionTwoText}`}</Card.Text>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              View Poll
            </Button>
          </div>
        </Card.Body>
        <Card.Footer className="">
          <LastSeen date={timestamp} />
        </Card.Footer>
      </Card>
      <br />
    </div>
  );
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question: question
      ? formatQuestion(users[question.author], question, authedUser)
      : null,
  };
}

export default connect(mapStateToProps)(Question);
