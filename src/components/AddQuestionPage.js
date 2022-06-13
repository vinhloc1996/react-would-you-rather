import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Card, Form, Col, Container, Row } from "react-bootstrap";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

function AddQuestion(props) {
  const [optionOneText, changeOptionOneText] = useState("");
  const [optionTwoText, changeOptionTwoText] = useState("");
  const navigate = useNavigate();
  const { dispatch, authedUser } = props;

  useEffect(() => {
    if (authedUser === null) {
      return navigate("/", { state: { path: `/add` } });
    }
  }, [authedUser, navigate]);

  const handleSubmitQuestion = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (
      form.checkValidity() === false ||
      optionOneText === "" ||
      optionTwoText === ""
    ) {
      e.stopPropagation();
      return;
    }

    dispatch(handleAddQuestion(optionOneText, optionTwoText));
    changeOptionOneText("");
    changeOptionTwoText("");
    navigate("/");
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs="6">
          <Card className="text-center">
            <Card.Header>Create New Question</Card.Header>
            <Card.Body>
              <Card.Title>Would you rather ...</Card.Title>
              <Form onSubmit={handleSubmitQuestion} autoComplete="off">
                <Form.Control
                  type="text"
                  value={optionOneText}
                  onChange={(e) => {
                    changeOptionOneText(e.target.value);
                  }}
                  required
                  placeholder="First Option Text"
                />
                <hr />
                <Form.Control
                  type="text"
                  value={optionTwoText}
                  onChange={(e) => {
                    changeOptionTwoText(e.target.value);
                  }}
                  required
                  placeholder="Second Option Text"
                />

                <br />
                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg" type="submit">
                    Submit Vote
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(AddQuestion);
