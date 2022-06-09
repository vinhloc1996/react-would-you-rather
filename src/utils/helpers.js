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

export function formatQuestion(author, question, authedUser) {
  const { uid, name, avatarURL } = author;
  const { qid, optionOne, optionTwo, timestamp } = question;
  const answers = optionOne.votes.concat(optionTwo.votes);

  return {
    author: uid,
    id: qid,
    timestamp,
    avatarURL,
    name,
    optionOneText: optionOne.text,
    optionTwoText: optionTwo.text,
    answers,
    hasAnswered: answers.includes(authedUser),
    totalAnswer: answers.length,
    totalAnswer1: optionOne.votes.length,
    totalAnswer2: optionTwo.votes.length,
  };
}

export function formatUserData(user, authedUser) {
  const { uid, name, avatarURL, answers, questions } = user;

  return {
    uid,
    name,
    avatarURL,
    answers: answers.length,
    questions: questions.length,
    total: answers.length + questions.length,
    isAuthedUser: uid === authedUser
  }
}