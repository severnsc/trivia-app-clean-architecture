const entities = require('../../entities')
const chai = require('chai')
const should = chai.should()
const expect = chai.expect

describe('createQuestion', () => {

  let category = "foo"
  let text = "bar"
  let correctAnswer = true
  let incorrectAnswers = [false]
  
  describe('happy path', () => {

    it('should create an object with question properties', () => {
      const question = entities.createQuestion(category, text, correctAnswer, incorrectAnswers)
      question.should.be.an('object')
      question.should.have.property('id')
      question.id.should.be.a('string')
      question.should.have.property('category')
      question.category.should.be.a('string')
      question.category.should.equal(category)
      question.should.have.property('text')
      question.text.should.be.a('string')
      question.text.should.equal(text)
      question.should.have.property('correctAnswer')
      question.correctAnswer.should.equal(correctAnswer)
      question.should.have.property('incorrectAnswers')
      question.incorrectAnswers.should.be.an('array')
      question.incorrectAnswers.should.equal(incorrectAnswers)
    })
  })
  
  describe('argument problems', () => {
  
    describe('outer arguments are wrong type', () => {

      before(() => {
        category, text, correctAnswer = 1
        incorrectAnswers = [1]
      })

      it('should thow a TypeError', () => {
        const errorfn = () => entities.createQuestion(category, text, correctAnswer, incorrectAnswers)
        expect(errorfn).to.throw(TypeError)
      })
    })
    
    describe('incorrectAnswers inner value wrong', () => {

      before(() => {
        incorrectAnswers = [1]
      })

      it('should throw a TypeError', () => {
        const errorfn = () => entities.createQuestion(category, text, correctAnswer, incorrectAnswers)
        expect(errorfn).to.throw(TypeError)
      })
    })
  }) 
})