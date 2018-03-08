const shortid = require('shortid')

const createGame = questions => ({
  id: shortid.generate(),
  questions,
  submittedAnswers: [],
  submitAnswer (submittedAnswer) {
    if(!this.complete){
      return this.submittedAnswers = [
        ...this.submittedAnswers,
        submittedAnswer
      ]
    }
  },
  get numberCorrect (){
    return this.submittedAnswers.reduce((total, submittedAnswer) => {
      const answeredQuestion = this.questions.find(question => question.id == submittedAnswer.questionId)
      if (submittedAnswer.answer === answeredQuestion.correctAnswer) return total + 1
    }, 0)
  },
  get totalAnswered (){
    return this.submittedAnswers.length
  },
  get complete (){
    return this.totalAnswered === this.questions.length ? true : false
  }
})

const createQuestion = (category, text, correctAnswer, incorrectAnswers) => ({
  id: shortid.generate(),
  category,
  text,
  correctAnswer,
  incorrectAnswers
})

module.exports = {
  createGame,
  createQuestion
}