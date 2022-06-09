import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
  _saveUser,
  _getUser,
  _checkUserId
} from "./_Data";

export function getInitialData() {
  return Promise.all([_getQuestions(), _getUsers()]).then(
    ([questions, users]) => ({ questions, users })
  );
}

export function getUsersData() {
  return Promise.all([_getUsers()]).then(
    ([users]) => ({ users })
  );
}

export function saveUser(user) {
    return _saveUser(user)
}

export function saveQuestion(question) {
    return _saveQuestion(question)
}

export function saveQuestionAnswer(qid, answer, authedUser) {
    return _saveQuestionAnswer({authedUser, qid, answer})
}

export function getUser(uId) {
  return _getUser(uId);
}

export function checkUserId(uId) {
  return _checkUserId(uId);
}