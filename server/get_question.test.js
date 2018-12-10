let getQuestion = require('./get_question');

describe('Get one question', () => {
  it('should return a single question', () => {
    let questionList = [
      {
        id: 1,
        question: 'Do you like Mexican food?',
        answerYes: 'Yes, you should have Cafe Rio!',
        answerNo: 'Lucky for you, Cafe Rio transcends your likes and dislikes and you should have Cafe Rio!'
      }
    ]
    let usedIds = [];
    expect(getQuestion(questionList, usedIds, 0)).toEqual(questionList[0]);
  })
  it('should not return a used id', () => {
    let questionList = [
      {
        id: 1,
        question: 'Do you like Mexican food?',
        answerYes: 'Yes, you should have Cafe Rio!',
        answerNo: 'Lucky for you, Cafe Rio transcends your likes and dislikes and you should have Cafe Rio!'
      },
      {
        id: 2,
        question: 'Is the sky blue?',
        answerYes: 'You have eyes and should celebrate by eating Cafe Rio!',
        answerNo: 'You need to reevaluate your eyesight by eating Cafe Rio!'
      },
    ]
    let usedIds = [2];
    expect(getQuestion(questionList, usedIds, 0)).toEqual(questionList[0]);
  })
  it('should return any one random question if all questions have been seen once', () => {
    let questionList = [
      {
        id: 1,
        question: 'Do you like Mexican food?',
        answerYes: 'Yes, you should have Cafe Rio!',
        answerNo: 'Lucky for you, Cafe Rio transcends your likes and dislikes and you should have Cafe Rio!'
      },
      {
        id: 2,
        question: 'Is the sky blue?',
        answerYes: 'You have eyes and should celebrate by eating Cafe Rio!',
        answerNo: 'You need to reevaluate your eyesight by eating Cafe Rio!'
      },
    ]
    let usedIds = [1, 2];
    expect(getQuestion(questionList, usedIds, .99)).toEqual(questionList[1]);
  })
  it('should return a random question from question list if user id is missing', () => {
    let questionList = [
      {
        id: 1,
        question: 'Do you like Mexican food?',
        answerYes: 'Yes, you should have Cafe Rio!',
        answerNo: 'Lucky for you, Cafe Rio transcends your likes and dislikes and you should have Cafe Rio!'
      },
      {
        id: 2,
        question: 'Is the sky blue?',
        answerYes: 'You have eyes and should celebrate by eating Cafe Rio!',
        answerNo: 'You need to reevaluate your eyesight by eating Cafe Rio!'
      },
    ]
    expect(getQuestion(questionList, undefined, .99)).toEqual(questionList[1]);
  })

})