const interactors = require('./interactors')
const fetch = require('node-fetch')

const createNewGame = save => {
  const questions = interactors.getQuestions(fetch).then(questions)
  const newGame = interactors.newGame(questions, save)
  const dtoQuestions = newGame.questions.map(question => ({
      id: question.id,
      category: question.category,
      text: question.text, 
      answers: [...question.incorrectAnswers, question.correctAnswer]
    })
  )
  return Object.assign({}, newGame, {questions: dtoQuestions})
}

const submitAnswer = (find, gameId, questionId, answer, save) => {
  const game = interactors.submitAnswer(find, gameId, questionId, answer, save)
  const dtoQuestions = game.questions.map(question => ({
      id: question.id,
      category: question.category,
      text: question.text, 
      answers: [...question.incorrectAnswers, question.correctAnswer]
    })
  )
  return Object.assign({}, game, {questions: dtoQuestions})
}

module.exports = {
  createNewGame,
  submitAnswer
}