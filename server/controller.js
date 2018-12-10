let questions = require('./questions');
let getQuestion = require('./get_question');

module.exports = {
  getQuestion: (req, res) => {
    let randomQuestion = getQuestion(questions, req.session.user.usedQuestions, Math.random());
    req.session.user.usedQuestions.push(randomQuestion.id);
    res.status(200).send(randomQuestion);
  }
}

// var rand = myArray[Math.floor(Math.random() * myArray.length)