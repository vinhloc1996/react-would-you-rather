import React, { useEffect } from "react";
import { Card, Badge, Col, Container, Row, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { formatUserData } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
// import { handleInitialData } from "../actions/share";

function Leaderboard(props) {
  const navigate = useNavigate();
  const { authedUser, board, loadingBar, dispatch } = props;

  useEffect(() => {
    if (authedUser === null) {
      return navigate("/", {state: {path: '/leaderboard'}});
    }
    // dispatch(handleInitialData(authedUser));
  }, [authedUser, dispatch, navigate]);

  const totalUser = board === null ? 0 : board.length;

  return (
    loadingBar.default === 0 && (
      <Container>
        <Row>
          <Col></Col>
          <Col xs="6">
            {board !== null &&
              board.map((u, i) => (
                <Card key={u.id} className="text-center">
                  <Card.Header>
                    <Image
                      src={u.avatarURL}
                      alt="User Avatar"
                      width="40px"
                      height="40px"
                    />
                    {u.id === authedUser.id ? (
                      <Badge text="dark" bg="primary">
                        It's you
                      </Badge>
                    ) : (
                      u.name
                    )}
                    {"     "}
                    <Badge pill bg="success">
                      Rank {i + 1}/{totalUser}
                    </Badge>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Total Scores: {u.total}</Card.Title>
                    <Card.Text>Answered questions: {u.answers}</Card.Text>
                    <Card.Text>Created questions: {u.questions}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    )
  );
}

function mapStateToProps({ authedUser, users, loadingBar }) {
  return {
    loadingBar,
    authedUser,
    board:
      authedUser !== null
        ? Object.values(users)
            .map((u) => formatUserData(u, authedUser.id))
            .sort((a, b) => b.total - a.total)
        : null,
  };
}

export default connect(mapStateToProps)(Leaderboard);
