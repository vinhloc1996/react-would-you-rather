import React, { useState } from "react";
import { Button, Image, Card, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import LastSeen from "./LastSeen";
import { handleAnswerQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

function UnansweredQuestion(props) {
  const { question, authedUser, dispatch } = props;
  const [option, changeOption] = useState("optionOne");
  const navigate = useNavigate();

  if (question === null) {
    return <p>This question doesn't exist</p>;
  }

  const { name, avatarURL, timestamp, id, optionOneText, optionTwoText } =
    question;

  const handleAnswers = (event, option) => {
    event.preventDefault();
    changeOption(option);
  };

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    dispatch(handleAnswerQuestion(id, option, authedUser.id));
    return navigate(window.location.pathname);
  };

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
          <Form>
            <Form.Check
              type="radio"
              name={`question-${id}`}
              onClick={(e) => handleAnswers(e, "optionOne")}
              label={optionOneText}
              defaultChecked={true}
            />
            <Form.Check
              type="radio"
              name={`question-${id}`}
              onClick={(e) => handleAnswers(e, "optionTwo")}
              label={optionTwoText}
            />
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                size="lg"
                onClick={(e) => handleSubmitAnswer()}
              >
                Submit Vote
              </Button>
            </div>
          </Form>
        </Card.Body>
        <Card.Footer className="">
          <LastSeen date={timestamp} />
        </Card.Footer>
      </Card>
      <br />
    </div>
  );
}

function mapStateToProps({ authedUser, questions, users, dispatch }, { id }) {
  const question = questions[id];
  return {
    dispatch,
    authedUser,
    question: question
      ? formatQuestion(users[question.author], question, authedUser)
      : null,
  };
}

export default connect(mapStateToProps)(UnansweredQuestion);
