const utils = require('../utils')

const game = (id, currentQuestionModel, complete) => {

  if(typeof id !== 'string'){
    throw new TypeError(utils.constructErrorMessage('id', 'string', id))
  }

  if(typeof currentQuestionModel !== 'object'){
    throw new TypeError(utils.constructErrorMessage('currentQuestionModel', 'object', currentQuestionModel))
  }

  if(typeof complete !== 'boolean'){
    throw new TypeError(utils.constructErrorMessage('complete', 'boolean', complete))
  }

  return {
    id,
    currentQuestionModel,
    complete
  }
}

const completedGame = (id, answeredQuestions, totalCorrect, totalAnswered, complete) => {

  if(typeof id !== 'string'){
    throw new TypeError(utils.constructErrorMessage('id', 'string', id))
  }

  if(!answeredQuestions instanceof Array){
    throw new TypeError(utils.constructErrorMessage('answeredQuestions', 'array', answeredQuestions))
  }

  if(typeof totalCorrect !== 'number'){
    throw new TypeError(utils.constructErrorMessage('totalCorrect', 'number', totalCorrect))
  }

  if(typeof totalAnswered !== 'number'){
    throw new TypeError(utils.constructErrorMessage('totalAnswered', 'number', totalAnswered))
  }

  if(typeof complete !== 'boolean'){
    throw new TypeError(utils.constructErrorMessage('complete', 'boolean', complete))
  }

  return {
    id,
    answeredQuestions,
    totalCorrect,
    totalAnswered,
    complete
  }
}

const currentQuestion = (id, questionCategory, questionText, answers, questionNumber) => {
  
  if(typeof id !== 'string'){
    throw new TypeError(utils.constructErrorMessage('id', 'string', id))
  }

  if(typeof questionCategory !== 'string'){
    throw new TypeError(utils.constructErrorMessage('questionCategory', 'string', questionCategory))
  }

  if(typeof questionText !== 'string'){
   throw new TypeError(utils.constructErrorMessage('questionText', 'string', questionText))
  }

  if(!answers instanceof Array){
    throw new TypeError(utils.constructErrorMessage('answers', 'array', answers))
  }

  if(answers.some(answer => typeof answer !== 'string')){
    throw new TypeError(utils.constructErrorMessage('answers elements', 'string', answers))
  }

  if(typeof questionNumber !== 'number'){
    throw new TypeError(utils.constructErrorMessage('questionNumber', 'number', questionNumber))
  }

  return {
    id,
    questionCategory,
    questionText,
    answers,
    questionNumber
  }
}

const answer = (gameId, questionId, value) => {

  if(typeof gameId !== "string"){
    throw new TypeError(utils.constructErrorMessage('gameId', 'string', gameId))
  }

  if(typeof questionId !== 'string'){
    throw new TypeError(utils.constructErrorMessage('questionId', 'string', questionId))
  }

  if(typeof value !== 'string'){
    throw new TypeError(utils.constructErrorMessage('value', 'string', value))
  }

  return  {
    gameId,
    questionId,
    value
  }
}

module.exports = {
  game,
  currentQuestion,
  completedGame,
  answer
}