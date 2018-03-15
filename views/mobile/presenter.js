const compose = require('./compose')
const globalViewModel = require('../globalViewModel')

const getGameModel = game => {
  const questionsIndex = game.answers.length
  const currentQuestion = game.questions[questionsIndex]
 
  const answers = [
    ...currentQuestion.incorrectAnswers,
    currentQuestion.correctAnswer
  ]
 
  const currentQuestionNumber = questionsIndex + 1
 
  const currentQuestionModel = globalViewModel.currentQuestion(
    currentQuestion.category,
    currentQuestion.text,
    answers,
    currentQuestionNumber
  )
  
  const gameModel = globalViewModel.game(game.id, currentQuestionModel)
  return gameModel
}

const createGame = async () => {
  const game = await compose.createGame()
  const gameModel = getGameModel(game)
  return gameModel
}

const answerQuestion = answer => {
  const updatedGame = compose.answerQuestion(answer)
  
  if(updatedGame.complete){
    
    const questions = updatedGame.questions.map(question => ({
      question.text,
      question.correctAnswer
    })
    
    const answers = updatedGame.answers.map(a => a.value)
    const gameStatistics = compose.getGameStatistics(updatedGame.id)
    const { totalCorrect, totalAnswered } = gameStatistics
    
    const completedGameModel = globalViewModel.completedGame(
      updatedGame.id,
      questions,
      answers,
      totalCorrect,
      totalAnswered
    )
    
    return completedGameModel
  
  }else{
    const gameModel = getGameModel(updatedGame)
    return gameModel
  }
}

module.exports = {
  createGame,
  answerQuestion
}