const shortid = require('shortid')

const createGame = questions => ({
  id: shortid.generate(),
  questions, //validate these somehow
  submittedAnswers: [],
  submitAnswer (submittedAnswer) { //validate these somehow
    if(!this.completed){
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
  get completed (){
    return this.totalAnswered === this.questions.length ? true : false
  }
})

module.exports = {
  createGame
}