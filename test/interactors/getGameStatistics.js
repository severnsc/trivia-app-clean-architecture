const core = require('../../lib')
const chai = require('chai')
const should = chai.should()
const expect = chai.expect

describe('getGameStatistics', () => {

  const getGameStatisticsInteractor = core.getGameStatisticsInteractor

  const gameId = "1"

  const questions = [
    {id: "1", category: "Entertainment", text: 'foo', correctAnswer: "True", incorrectAnswers: ["False"]},
    {id: "2", category: "Entertainment", text: 'bar', correctAnswer: "True", incorrectAnswers: ["False"]}
  ]

  const answers = [
    {gameId: "1", questionId: "1", value: "True"},
    {gameId: "1", questionId: "2", value: "True"}
  ]

  let getGameById = () => ({
    id: "1",
    questions,
    answers
  })

  describe('happy path', () => {
    it('should return an object with game stats', () => {
      const statisticsObject = getGameStatisticsInteractor(getGameById)(gameId)
      statisticsObject.should.be.an('object')
      statisticsObject.should.have.property('gameId')
      statisticsObject.gameId.should.equal(gameId)
      statisticsObject.should.have.property('totalCorrect')
      statisticsObject.totalCorrect.should.equal(2)
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
            correctAnswer: "True", 
            incorrectAnswers: ["False"]
          }
        ],
        answers: [
          ...answers,
          {gameId: "1", questionId: "3", value: "True"}
        ]
      })
    })

    it('should return an object with game stats', () => {
      const statisticsObject = getGameStatisticsInteractor(getGameById)(gameId)
      statisticsObject.should.be.an('object')
      statisticsObject.should.have.property('gameId')
      statisticsObject.gameId.should.equal(gameId)
      statisticsObject.should.have.property('totalCorrect')
      statisticsObject.totalCorrect.should.equal(3)
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
      const errorfn = () => getGameStatisticsInteractor(getGameById)(gameId)
      expect(errorfn).to.throw()
    })
  })
})