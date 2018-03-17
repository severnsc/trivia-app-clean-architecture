import * as globalViewModel from '../globalViewModel'

const getGameModel = game => {
  const questionsIndex = game.answers.length
  const currentQuestion = game.questions[questionsIndex]
 
  const answers = [
    ...currentQuestion.incorrectAnswers,
    currentQuestion.correctAnswer
  ]

  const sortedAnswers = answers.slice().sort().reverse()
 
  const currentQuestionNumber = questionsIndex + 1
 
  const currentQuestionModel = globalViewModel.currentQuestion(
    currentQuestion.id,
    currentQuestion.category,
    currentQuestion.text,
    sortedAnswers,
    currentQuestionNumber
  )
  
  const gameModel = globalViewModel.game(
    game.id,
    currentQuestionModel,
    game.complete
  )
  return gameModel
}

const getCompletedGameModel = (updatedGame, getGameStatistics) => {
  const questions = updatedGame.questions.map(question => ({
    id: question.id,
    text: question.text,
    correctAnswer: question.correctAnswer
  }))
  
  const answers = updatedGame.answers
  const answeredQuestions = questions.map(question => {
    const userAnswer = answers.find(answer => 
      answer.questionId === question.id
    )
    return Object.assign({}, question, {userAnswer: userAnswer.value})
  })
  const gameStatistics = getGameStatistics(updatedGame.id)
  const { totalCorrect, totalAnswered } = gameStatistics
  
  const completedGameModel = globalViewModel.completedGame(
    updatedGame.id,
    answeredQuestions,
    totalCorrect,
    totalAnswered,
    updatedGame.complete
  )
  return completedGameModel
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
        const completedGameModel = getCompletedGameModel(updatedGame, getGameStatistics)
        return completedGameModel
      
      }else{
        const gameModel = getGameModel(updatedGame)
        return gameModel
      }
    }
  }
}