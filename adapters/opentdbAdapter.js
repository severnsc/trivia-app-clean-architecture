const fetch = require('node-fetch')
const core = require('../lib')

const fetchQuestions = async () => {
  const url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
  const response = await fetch(url).catch(err => {throw err})
  const json = await response.json().catch(err => {throw err})
  const results = json.results
  const questionEntities = results.map(result => {
    return core.createQuestionEntity(result.category, result.question, result.correct_answer, result.incorrect_answers)
  })
  return questionEntities
}

module.exports = {
  fetchQuestions
}