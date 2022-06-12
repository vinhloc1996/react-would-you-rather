import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

function UnansweredQuestion(props) {
  const { question, authedUser, dispatch } = props;
  const [option, changeOption] = useState("optionOne");
  const navigate = useNavigate();

  if (question === null) {
    return <p>This question doesn't exist</p>;
  }

  const { id, optionOneText, optionTwoText } = question;

  const handleAnswers = (e) => {
    console.log(e.target.value);
    changeOption(e.target.value);
  };

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    dispatch(handleAnswerQuestion(id, option, authedUser.id));
    return navigate(window.location.pathname);
  };

  return (
    <Card.Body>
      <Card.Title>Would you rather ...</Card.Title>
      <Form>
        <Form.Check type="radio" isValid>
          <Form.Check.Input
            type="radio"
            isValid
            value="optionOne"
            id={`optionOne-${id}`}
            name={`question-${id}`}
            onClick={handleAnswers}
            defaultChecked
          />
          <Form.Check.Label htmlFor={`optionOne-${id}`}>{optionOneText}</Form.Check.Label>
        </Form.Check>

        <Form.Check type="radio" isValid>
          <Form.Check.Input
            type="radio"
            isValid
            value="optionTwo"
            id={`optionTwo-${id}`}
            name={`question-${id}`}
            onClick={handleAnswers}
          />
          <Form.Check.Label htmlFor={`optionTwo-${id}`}>{optionTwoText}</Form.Check.Label>
        </Form.Check>
        
        <div className="d-grid gap-2">
          <Button
            variant="primary"
            size="lg"
            onClick={handleSubmitAnswer}
          >
            Submit Vote
          </Button>
        </div>
      </Form>
    </Card.Body>
  );
}

function mapStateToProps({ authedUser }, { question }) {
  return {
    authedUser,
    question: question,
  };
}

export default connect(mapStateToProps)(UnansweredQuestion);
