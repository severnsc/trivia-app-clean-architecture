const entities = require('./entities')
const url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'

const getQuestions = async fetch => {
  const response = await fetch(url)
  const parsedResponse = await response.json()
  return parsedResponse.results
}

const newGame = (questions, save) => {
  const questionEntities = questions.map(question => 
    entities.createQuestion(question.category, question.text, question.correctAnswer, question.incorrectAnswers)
  )
  const newGame = entities.createGame(questionEntities)
  save(newGame)
  return {
    id: newGame.id,
    questions: newGame.questions,
    submittedAnswers: newGame.submittedAnswers,
    numberCorrect: newGame.numberCorrect,
    totalAnswered: newGame.totalAnswered,
    complete: newGame.complete
  }
}

const submitAnswer = (gameId, find, questionId, answer) => {
  const game = find(gameId)
  const submittedAnswer = {questionId, answer}
  game.submitAnswer(submittedAnswer)
  return game
}

module.exports = {
  getQuestions,
  createNewGame,
  submitAnswer
}