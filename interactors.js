const entities = require('./entities')

const createGameWithQuestions = getQuestions => {
  const questions = getQuestions()
  const questionEntities = questions.map(question =>
    entities.createQuestion(question.category, question.text, question.correctAnswer, question.incorrectAnswers)
  )
  const game = entities.createGame(questionEntities)
  return game
}

const answerQuestion = (answer, getGameById, saveGame) => {
  if(typeof answer.gameId !== 'string'){
    throw new TypeError('answer.gameId must be a string!')
  }
  if(typeof answer.questionId !== 'string'){
    throw new TypeError('answer.questionId must be a string!')
  }
  if(!['string', 'boolean'].includes(typeof answer.value)){
    throw new TypeError('answer.value must be a string or boolean!')
  }
  const game = getGameById(answer.gameId)
  const updatedGame = Object.assign({}, game, {answers: [...game.answers, answer]})
  saveGame(updatedGame)
  return updatedGame
}

const getGameStatistics = (gameId, getGameById) => {
  const game = getGameById(gameId)
  
  const numberCorrect = game.answers.reduce((total, answer) => {
    const currentQuestion = game.questions.find(question => 
      question.id === answer.questionId
    )
    if(currentQuestion.correctAnswer === answer.value){
      return total + 1
    }
  }, 0)

  const totalAnswered = game.answers.length

  return {
    gameId,
    numberCorrect,
    totalAnswered
  }
}

module.exports = {
  createGameWithQuestions,
  answerQuestion,
  getGameStatistics
}