export function formatUserId(username) {
  return username && username.trim() !== ""
    ? username.toLowerCase().trim().replace(" ", "")
    : null;
}

export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function formatQuestion(authorUser, question, authedUser) {
  const { name, avatarURL } = authorUser;
  const { id, optionOne, optionTwo, timestamp, author } = question;
  const answers = optionOne.votes.concat(optionTwo.votes);

  return {
    author,
    id: id,
    timestamp,
    avatarURL,
    name,
    optionOneText: optionOne.text,
    optionTwoText: optionTwo.text,
    optionOneVotes: optionOne.votes,
    optionTwoVotes: optionTwo.votes,
    hasAnswered: answers.includes(authedUser),
    totalAnswer: answers.length,
    totalAnswer1: optionOne.votes.length,
    totalAnswer2: optionTwo.votes.length,
  };
}

export function formatUserData(user, authedUser) {
  const { id, name, avatarURL, answers, questions } = user;
  const answerArr = Object.keys(answers);
  return {
    id,
    name,
    avatarURL,
    answers: answerArr.length,
    questions: questions.length,
    total: answerArr.length + questions.length,
    isAuthedUser: id === authedUser
  }
}

export const QuestionViewMode = {
  View: 'View',
  Answer: 'Answer',
  Result: 'Result'
}