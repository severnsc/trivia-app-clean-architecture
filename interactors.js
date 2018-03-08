const entities = require('./entities')
const url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'

const getQuestions = async fetch => {
  const response = await fetch(url)
  const parsedResponse = await response.json()
  return parsedResponse.results
}

const createNewGame = (questions, save) => {
  const questionEntities = questions.map(question => 
    entities.createQuestion(question.category, question.text, question.correct_answer, question.incorrect_answers)
  )
  const newGame = entities.createGame(questionEntities)
  const condensedQuestions = newGame.questions.map(question => ({
      id: question.id,
      category: question.category,
      text: question.text, 
      answers: [...question.incorrectAnswers, question.correctAnswer]
    })
  )
  save(newGame)
  return {
    id: newGame.id,
    questions: condensedQuestions,
    complete: newGame.complete
  }
}

const submitAnswer = (gameId, questionId, answer, find) => {
  const currentGame = find(gameId)
  currentGame.submitAnswer({questionId, answer})
  return {
    id: currentGame.id,
    questions: currentGame.questions,
    submittedAnswers: currentGame.submittedAnswers,
    complete: currentGame.complete
  }
}

const getGameWithScore = (gameId, find) => {
  const currentGame = find(gameId)
  return {
    id: currentGame.id,
    questions: currentGame.questions,
    submittedAnswers: currentGame.submittedAnswers,
    complete: currentGame.complete,
    numberCorrect: currentGame.numberCorrect,
    totalAnswered: currentGame.totalAnswered
  }
}

module.exports = {
  createNewGame,
  submitAnswer,
  getGameWithScore
}