import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function answerQuestion(authedUser, id, answer) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    answer,
    id,
  };
}

export function handleAnswerQuestion(qId, answer, authedUserId) {
  return (dispatch, getState) => {
    // const { authedUser } = getState();
    dispatch(showLoading());
    dispatch(answerQuestion(authedUserId, qId, answer));

    return saveQuestionAnswer(qId, answer, authedUserId)
      .catch((e) => {
        console.error("Error in handleAnswerQuestion: ", e);
        alert("There was an error while answering question. Try again!");
      })
      .then(() => dispatch(hideLoading()));
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());

    return saveQuestion({
      author: authedUser.id,
      optionOneText,
      optionTwoText,
    })
      .catch((e) => {
        console.error("Error in handleAddQuestion: ", e);
        alert("There was an error while adding question. Try again!");
      })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}
