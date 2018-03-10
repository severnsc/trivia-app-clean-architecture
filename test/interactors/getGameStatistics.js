const interactors = require('../../interactors')
const chai = require('chai')
const should = chai.should()

const questions = [
  {id: "1", category: "Entertainment", text: 'foo', correctAnswer: true, incorrectAnswers: [false]},
  {id: "2", category: "Entertainment", text: 'bar', correctAnswer: true, incorrectAnswers: [false]}
]

const answers = [
  {gameId: "1", questionId: "1", value: true},
  {gameId: "1", questionId: "2", value: true}
]

describe('getGameStatistics', () => {
  describe('happy path', () => {
    it('should return an object with game stats', () => {
      const gameId = "1"
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
    it('should return an object with game stats', () => {
      const gameId = "1"
      const getGameById = () => ({
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
        answers: [...answers, {gameId: "1", questionId: "3", value: true}]
      })
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
})