import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Question from "./Question";
import { useNavigate } from "react-router-dom";

function QuestionPage(props) {
  const { id } = useParams();
  const { authedUser } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (authedUser === null) {
      return navigate("/", { state: { path: `/questions/${id}` } });
    }
    // dispatch(handleInitialData(authedUser));
  }, [authedUser, id, navigate]);

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
