const shortid = require('shortid')

const createQuestion = (category, text, correctAnswer, incorrectAnswers) => {

	if(typeof category !== 'string') {
		throw new TypeError('category must be a string')
	}

	if(typeof text !== 'string') {
		throw new TypeError('text must be a string')
	}

	if(!['string', 'boolean'].includes(typeof correctAnswer)) {
		throw new TypeError('correctAnswer must be of type string or boolean')
	}

	if(!incorrectAnswers instanceof Array) {
		throw new TypeError('incorrectAnswers must be of type array')
	}

	if(incorrectAnswers.some(answer => !['string', 'boolean'].includes(typeof answer))){
		throw new TypeError('incorrectAnswers elements must be of type string or boolean!')
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