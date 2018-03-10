const interactors = require('../../interactors')
const chai = require('chai')
const should = chai.should()
const expect = chai.expect

const questions = [
  {category: "Entertainment", text: 'foo', correctAnswer: true, incorrectAnswers: [false]},
  {category: "Entertainment", text: 'bar', correctAnswer: true, incorrectAnswers: [false]}
]

const getQuestions = () => questions

describe('createGameWithQuestions', () => {
  describe('happy path', () => {
    it('should create game entity populated with questions', () => {
      const game = interactors.createGameWithQuestions(getQuestions)
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
      const errorfn = () => interactors.createGameWithQuestions(getQuestionsError)
      expect(errorfn).to.throw()
    })
  })
})