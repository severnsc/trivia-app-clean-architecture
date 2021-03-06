const core = require('../../lib')
const chai = require('chai')
const should = chai.should()
const expect = chai.expect

describe('createGameWithQuestions', () => {

  const createGameInteractor = core.createGameInteractor

  const questions = [
    {category: "Entertainment", question: 'foo', correct_answer: "True", incorrect_answers: ["False"]},
    {category: "Entertainment", question: 'bar', correct_answer: "True", incorrect_answers: ["False"]}
  ]

  const questionEntities = questions.map(question => {
    return core.createQuestionEntity(question.category, question.question, question.correct_answer, question.incorrect_answers)
  })

  const getQuestions = () => Promise.resolve(questionEntities)

  const createGame = () => console.log('game created!')

  describe('happy path', () => {
    it('should create game entity populated with questions', async () => {
      const game = await createGameInteractor(getQuestions)(createGame)()
      game.should.be.an('object')
      game.should.have.property('questions')
      game.questions.should.not.equal(questions)
      game.questions.should.equal(questionEntities)
      game.questions.forEach(question => {
        question.should.have.property('id')
        question.id.should.be.a('string')
      })
    })
  })
  describe('when getQuestions returns error', () => {
    it('should throw an error', async () => {
      const getQuestionsError = async () => {throw new Error}
      const errorfn = async () => await createGameInteractor(getQuestionsError)(createGame)().catch(err => err)
      errorfn().catch(err => expect(err).to.be.a('string'))
    })
  })
})