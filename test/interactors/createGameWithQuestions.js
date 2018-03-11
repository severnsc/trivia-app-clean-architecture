const core = require('../../lib')
const chai = require('chai')
const should = chai.should()
const expect = chai.expect

describe('createGameWithQuestions', () => {

  const createGameInteractor = core.createGameInteractor

  const questions = [
    {category: "Entertainment", text: 'foo', correctAnswer: true, incorrectAnswers: [false]},
    {category: "Entertainment", text: 'bar', correctAnswer: true, incorrectAnswers: [false]}
  ]

  const getQuestions = () => questions

  const createGame = () => console.log('game created!')

  describe('happy path', () => {
    it('should create game entity populated with questions', () => {
      const game = createGameInteractor(getQuestions)(createGame)
      game.should.be.an('object')
      game.should.have.property('questions')
      game.questions.should.not.equal(questions)
      game.questions[0].should.have.property('id')
      game.questions[0].id.should.be.a('string')
    })
  })
  describe('when getQuestions returns error', () => {
    it('should throw an error', () => {
      const getQuestionsError = () => {throw new Error}
      const errorfn = () => createGameInteractor(getQuestionsError)(createGame)
      expect(errorfn).to.throw()
    })
  })
})