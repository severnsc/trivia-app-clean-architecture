const game = (id, currentQuestionModel, complete) => {

  if(typeof id !== 'string'){
    throw new TypeError('id must be of type string!')
  }

  if(typeof currentQuestionModel !== 'object'){
    throw new TypeError('currentQuestionModel must be of type object!')
  }

  if(typeof complete !== 'boolean'){
    throw new TypeError('complete must be of type boolean!')
  }

  return {
    id,
    currentQuestionModel,
    complete
  }
}

const completedGame = (id, answeredQuestions, totalCorrect, totalAnswered, complete) => {

  if(typeof id !== 'string'){
    throw new TypeError('id must be of type string!')
  }

  if(!answeredQuestions instanceof Array){
    throw new TypeError('answeredQuestions must be of type array!')
  }

  if(typeof totalCorrect !== 'number'){
    throw new TypeError('totalCorrect must be of type number! Got ' + typeof totalCorrect)
  }

  if(typeof totalAnswered !== 'number'){
    throw new TypeError('totalAnswered must be of type number!')
  }

  if(typeof complete !== 'boolean'){
    throw new TypeError('complete must be of type boolean!')
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
    throw new TypeError('id must be of type string!')
  }

  if(typeof questionCategory !== 'string'){
    throw new TypeError('questionCategory must be of type string!')
  }

  if(typeof questionText !== 'string'){
   throw new TypeError('questionText must be of type string!')
  }

  if(!answers instanceof Array){
    throw new TypeError('answers must be of type array!')
  }

  if(answers.some(answer => typeof answer !== 'string')){
    throw new TypeError('answers elements must be of type string!')
  }

  if(typeof questionNumber !== 'number'){
    throw new TypeError('questionNumber must be of type number!')
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
    throw new TypeError('gameId must be of type string!')
  }

  if(typeof questionId !== 'string'){
    throw new TypeError('questionId must be of type string!')
  }

  if(typeof value !== 'string'){
    throw new TypeError('value must be of type string!')
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