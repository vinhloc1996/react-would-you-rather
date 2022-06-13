import React, { useEffect } from "react";
import { Button, Image, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import LastSeen from "./LastSeen";
import { useNavigate } from "react-router-dom";
import { QuestionViewMode } from "../utils/helpers";
import UnansweredQuestion from "./UnansweredQuestion";
import AnsweredQuestion from "./AnsweredQuestion";

function Question(props) {
  const { question, ViewMode } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (question === null) {
     return navigate("/notfound");
    }
  }, [question, navigate]);

  if (question === null) {
    return;
  }

  let {
    name,
    avatarURL,
    timestamp,
    id,
    optionOneText,
    optionTwoText,
    hasAnswered,
  } = question;

  const renderBody = () => {
    switch (ViewMode) {
      case QuestionViewMode.View:
        return (
          <Card.Body>
            <Card.Title>Would you rather ...</Card.Title>
            <Card.Text>{`${optionOneText} OR ${optionTwoText}`}</Card.Text>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate(`/questions/${id}`)}
              >
                View Poll
              </Button>
            </div>
          </Card.Body>
        );
      default:
        if (!hasAnswered) {
          return <UnansweredQuestion question={question} />;
        } else {
          return <AnsweredQuestion question={question} />;
        }
    }
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
        {renderBody()}
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
      ? formatQuestion(users[question.author], question, authedUser.id)
      : null,
  };
}

export default connect(mapStateToProps)(Question);
