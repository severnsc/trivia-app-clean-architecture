const entities = require('../../entities')
const chai = require('chai')
const should = chai.should()
const expect = chai.expect

describe('createGame', () => {
  it('should create an object with the game properties', () => {
    
    const questions = [
      {id: 1, category: "Entertainment", text: 'foo', correctAnswer: true, incorrectAnswers: [false]},
      {id: 2, category: "Entertainment", text: 'bar', correctAnswer: true, incorrectAnswers: [false]}
    ]
    
    const game = entities.createGame(questions)
    game.should.be.an('object')
    game.should.have.property('id')
    game.id.should.be.a('string')
    game.should.have.property('questions')
    game.questions.should.be.an('array')
    game.questions.should.equal(questions)
    game.should.have.property('answers')
    game.answers.should.be.an('array')
    game.answers.should.have.lengthOf(0)
    game.should.have.property('complete')
    game.complete.should.be.a('boolean')
    game.complete.should.equal(false)
  })
})