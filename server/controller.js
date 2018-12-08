let questions = require('./questions');

module.exports = {
  getQuestion: (req, res) => {
    let filtered = questions.filter(question => !req.session.user.usedQuestions.includes(question.id));
    //this block will make sure every question is asked once before reusing questions
    if(filtered.length !== 0) {
      let randomQuestion = filtered[Math.floor(Math.random() * filtered.length)];
      req.session.user.usedQuestions.push(randomQuestion.id);
      res.status(200).send(randomQuestion);
    } else {
      let randomQuestion = questions[Math.floor(Math.random() * filtered.length)];
      res.status(200).send(randomQuestion);
    }
  }
}

// var rand = myArray[Math.floor(Math.random() * myArray.length)