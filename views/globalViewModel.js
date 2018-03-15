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

const currentQuestion = (questionCategory, questionText, answers, questionNumber) => {
  
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
    questionCategory,
    questionText,
    answers,
    questionNumber
  }
}

module.exports = {
  game,
  currentQuestion
}