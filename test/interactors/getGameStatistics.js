const interactors = require('../../interactors')
const chai = require('chai')
const should = chai.should()
const expect = chai.expect

describe('getGameStatistics', () => {

  const gameId = "1"

  const questions = [
    {id: "1", category: "Entertainment", text: 'foo', correctAnswer: true, incorrectAnswers: [false]},
    {id: "2", category: "Entertainment", text: 'bar', correctAnswer: true, incorrectAnswers: [false]}
  ]

  const answers = [
    {gameId: "1", questionId: "1", value: true},
    {gameId: "1", questionId: "2", value: true}
  ]

  let getGameById = () => ({
    id: "1",
    questions,
    answers
  })

  describe('happy path', () => {
    it('should return an object with game stats', () => {
      const getGameById = () => ({
        id: "1",
        questions,
        answers
      })
      const statisticsObject = interactors.getGameStatistics(gameId, getGameById)
      statisticsObject.should.be.an('object')
      statisticsObject.should.have.property('gameId')
      statisticsObject.gameId.should.equal(gameId)
      statisticsObject.should.have.property('numberCorrect')
      statisticsObject.numberCorrect.should.equal(2)
      statisticsObject.should.have.property('totalAnswered')
      statisticsObject.totalAnswered.should.equal(2)
    })
  })
  
  describe('alternative happy path', () => {

    before(() => {
      getGameById = () => ({
        id: "1",
        questions: [
          ...questions,
          {
            id: "3", 
            category: "Entertainment", 
            text: "baz", 
            correctAnswer: true, 
            incorrectAnswers: [false]
          }
        ],
        answers: [
          ...answers,
          {gameId: "1", questionId: "3", value: true}
        ]
      })
    })

    it('should return an object with game stats', () => {
      const statisticsObject = interactors.getGameStatistics(gameId, getGameById)
      statisticsObject.should.be.an('object')
      statisticsObject.should.have.property('gameId')
      statisticsObject.gameId.should.equal(gameId)
      statisticsObject.should.have.property('numberCorrect')
      statisticsObject.numberCorrect.should.equal(3)
      statisticsObject.should.have.property('totalAnswered')
      statisticsObject.totalAnswered.should.equal(3)
    })
  })
  
  describe('when getGameById returns an error', () => {

    before(() => {
      getGameById = () => {
        throw new Error
      }
    })

    it('should throw an error', () => {
      const errorfn = () => interactors.getGameStatistics(gameId, getGameById)
      expect(errorfn).to.throw()
    })
  })
})