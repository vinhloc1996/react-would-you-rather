import {
  RECEIVE_USERS,
  ADD_USER,
  ADD_QUESTION_USER,
  ANSWER_QUESTION_USER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER:
      const { user } = action;
      return {
        ...state,
        [user.id]: user,
      };
    case ADD_QUESTION_USER: {
      const { uId, qId } = action;
      return {
        ...state,
        [uId]: {
          ...state[uId],
          questions: state[uId].questions.concat([qId]),
        },
      };
    }
    case ANSWER_QUESTION_USER: {
      const { uId, qId, answer } = action;
      return {
        ...state,
        [uId]: {
          ...state[uId],
          answers: {
            ...state[uId].answers,
            [qId]: answer,
          },
        },
      };
    }
    default:
      return state;
  }
}
