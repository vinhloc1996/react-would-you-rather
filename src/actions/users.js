import { saveUser } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER = "ADD_USER";
export const ADD_QUESTION_USER = "ADD_QUESTION_USER";
export const ANSWER_QUESTION_USER = "ANSWER_QUESTION_USER";

export function updateUserAnswers(uId, qId, answer) {
  return {
    type: ANSWER_QUESTION_USER,
    uId,
    qId,
    answer
  };
}

export function updateUserQuestions(uId, qId) {
  return {
    type: ADD_QUESTION_USER,
    uId,
    qId
  };
}

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

export function handleAddUser({ id, name, avatarURL }) {
  return (dispatch) => {
      dispatch(showLoading());
    return saveUser({ id, name, avatarURL })
      .then((user) => dispatch(addUser(user)))
      .then(() => dispatch(hideLoading()));
  };
}
