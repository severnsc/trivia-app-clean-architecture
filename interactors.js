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

const submitAnswer = (find, gameId, questionId, answer) => {
  const game = find(gameId) // <- this needs to be an entity in order to call the function...
  const submittedAnswer = {questionId, answer}
  game.submitAnswer(submittedAnswer)
  return {
    id: game.id,
    questions: game.questions,
    submittedAnswers: game.submittedAnswers,
    numberCorrect: game.numberCorrect,
    totalAnswered: game.totalAnswered,
    complete: game.complete
  }
}

module.exports = {
  getQuestions,
  createNewGame,
  submitAnswer
}