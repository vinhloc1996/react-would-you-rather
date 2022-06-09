import { getInitialData, getUsersData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading";


export function handleInitialData(user) {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ questions, users }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(user));
      dispatch(hideLoading());
    });
  };
}

export function handleInitUserData() {
    return (dispatch) => {
      dispatch(showLoading());
      return getUsersData().then(({ users }) => {
        dispatch(receiveUsers(users));
        dispatch(hideLoading());
      });
    };
  }