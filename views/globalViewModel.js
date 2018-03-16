const game = (id, currentQuestionModel) => {

  if(typeof id !== 'string'){
    throw new TypeError('id must be of type string!')
  }

  if(typeof currentQuestionModel !== 'object'){
    throw new TypeError('currentQuestionModel must be of type object!')
  }

  return {
    id,
    currentQuestionModel
  }
}

const completedGame = (id, questions, answers, totalCorrect, totalAnswered) => {

  if(typeof id !== 'string'){
    throw new TypeError('id must be of type string!')
  }

  if(!questions instanceof Array){
    throw new TypeError('questions must be of type array!')
  }

  if(!answers instanceof Array){
    throw new TypeError('answers must be of type array!') 
  }

  if(typeof totalCorrect !== 'number'){
    throw new TypeError('totalCorrect must be of type number!')
  }

  if(typeof totalAnswered !== 'number'){
    throw new TypeError('totalAnswered must be of type number!')
  }

  return {
    id,
    questions,
    answers,
    totalCorrect,
    totalAnswered
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

module.exports = {
  game,
  currentQuestion,
  completedGame
}