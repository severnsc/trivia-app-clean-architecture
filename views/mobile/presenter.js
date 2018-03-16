import * as globalViewModel from '../globalViewModel'

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

export const createGamePresenter = createGameAsync => {
  return async () => {
    const game = await createGameAsync().catch(err => {throw new Error})
    const gameModel = getGameModel(game)
    return gameModel
  }
}

export const answerQuestionPresenter = dispatchAnswerQuestion => {
  return getGameStatistics => {
    return answer => {
      const updatedGame = dispatchAnswerQuestion(answer)

      if(updatedGame.complete){
        
        const questions = updatedGame.questions.map(question => ({
          text: question.text,
          correctAnswer: question.correctAnswer
        }))
        
        const answers = updatedGame.answers.map(a => a.value)
        const gameStatistics = getGameStatistics(updatedGame.id)
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
  }
}