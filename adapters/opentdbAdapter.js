const fetch = require('node-fetch')

const fetchQuestions = async () => {
  const url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
  const response = await fetch(url)
  const json = await response.json()
  const results = json.results
  return results
}

module.exports = {
  fetchQuestions
}