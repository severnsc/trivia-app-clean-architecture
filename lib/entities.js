const shortid = require('shortid')
const utils = require('../utils')

const createQuestion = (category, text, correctAnswer, incorrectAnswers) => {

	if(typeof category !== 'string') {
		throw new TypeError(utils.constructErrorMessage("category", 'string', category))
	}

	if(typeof text !== 'string') {
		throw new TypeError(utils.constructErrorMessage("text", 'string', text))
	}

	if(typeof correctAnswer !== 'string') {
		throw new TypeError(utils.constructErrorMessage("correctAnswer", 'string', correctAnswer))
	}

	if(!incorrectAnswers instanceof Array) {
		throw new TypeError(utils.constructErrorMessage("incorrectAnswers", 'array', incorrectAnswers))
	}

	if(incorrectAnswers.some(answer => typeof answer !== 'string')){
		throw new TypeError('incorrectAnswers elements must be of type string! Got value: ' + incorrectAnswers)
	}

  return {
		id: shortid.generate(),
		category,
		text,
		correctAnswer,
		incorrectAnswers
  }
}

const createGame = questionEntities => ({
  id: shortid.generate(),
  questions: questionEntities,
  answers: [],
  complete: false
})

module.exports = {
  createQuestion,
  createGame
}