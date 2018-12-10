//writing this way for testing purposes
module.exports = function (questionList, usedIds=[], randomNumber) {
  let filtered = questionList.filter(question => !usedIds.includes(question.id));
  if(filtered.length !== 0) {
    return filtered[Math.floor(randomNumber * filtered.length)];
  } else {
    return questionList[Math.floor(randomNumber * questionList.length)];
  }
}
