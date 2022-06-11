import React from "react";
import { Tabs, Tab, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import Question from "./Question";

function Dashboard(props) {
  return (
    props.loadingBar.default === 0 && (
      <div className="container-sm container-sign-in">
        <div>
          <Tabs
            defaultActiveKey="unansweredQuestion"
            id="questions"
            className="mb-3"
          >
            <Tab eventKey="unansweredQuestion" title="Unanswered Question">
              {!props.unansweredQuestionIds ? (
                <div>
                  <h3>
                    Well-done! You've answered everything. You can try to create some questions for the others to answer as well
                  </h3>
                </div>
              ) : (
                props.unansweredQuestionIds.map((id) => (
                  <Question key={id} id={id} />
                ))
              )}
            </Tab>

            <Tab eventKey="answeredQuestion" title="Answered Question">
              {!props.answeredQuestionIds ? (
                <div>
                  <h3>
                    Have you missed something? You've not answered any question.
                    Please go to <b><Nav.Link eventKey="unansweredQuestion">Unanswered Question tab</Nav.Link></b> to vote some
                  </h3>
                </div>
              ) : (
                props.answeredQuestionIds.map((id) => (
                  <Question key={id} id={id} />
                ))
              )}
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  );
}

function mapStateToProps({ authedUser, questions, loadingBar }) {
  const authedUserId = authedUser.id;
  return {
    loadingBar,
    authedUser,
    unansweredQuestionIds: Object.keys(questions)
      .filter(
        (qId) =>
          !questions[qId].optionOne.votes.includes(authedUserId) &&
          !questions[qId].optionTwo.votes.includes(authedUserId)
      )
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    answeredQuestionIds: Object.keys(questions)
      .filter(
        (qId) =>
          questions[qId].optionOne.votes.includes(authedUserId) ||
          questions[qId].optionTwo.votes.includes(authedUserId)
      )
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  };
}

export default connect(mapStateToProps)(Dashboard);
