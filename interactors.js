const entities = require('./entities')
const url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'

const createNewGame = async (save, fetch) => {
  const questionsResponse = await fetch(url)
  const parsedQuestionsResponse = await questionsResponse.json()
  const parsedQuestions = parsedQuestionsResponse.results
  const questionEntities = parsedQuestions.map(parsedQuestion => 
    entities.createQuestion(parsedQuestion.category, parsedQuestion.text, parsedQuestion.correct_answer, parsedQuestion.incorrect_answers)
  )
  const newGame = entities.createGame(questionEntities)
  const questions = newGame.questions.map(question => ({
      id: question.id,
      category: question.category,
      text: question.text, 
      answers: [...question.incorrectAnswers, question.correctAnswer]
    })
  )
  save(newGame)
  return {
    id: newGame.id,
    questions,
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