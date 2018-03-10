const interactors = require('../../interactors')
const chai = require('chai')
const should = chai.should()
const expect = chai.expect

describe('answerQuestion', () => {
  
  const answer = {
    gameId: "1",
    questionId: "1",
    value: true
  }

  const getGameById = () => ({
    id: "1",
    questions: [{id: "1", category: "Entertainment", text: 'foo', correctAnswer: true, incorrectAnswers: [false]}],
    answers: []
  })

  const saveGame = () => {
    console.log('game saved!')
  }

  describe('happy path', () => {
    it('should append answer object to the game\'s answers', () => {
      const updatedGame = interactors.answerQuestion(answer, getGameById, saveGame)
      updatedGame.answers.should.be.an('array')
      updatedGame.answers.should.be.lengthOf(1)
      updatedGame.answers[0].should.equal(answer)
    })
  })
  describe('misformatted answer object', () => {
    describe('where arguments are the wrong types', () => {
      it('should throw a TypeError', () => {
        let badAnswer = Object.assign({}, answer, {gameId: 1})
        let badfn = () => interactors.answerQuestion(badAnswer, getGameById, saveGame)
        expect(badfn).to.throw(TypeError)
        badAnswer = Object.assign({}, answer, {questionId: 1})
        badfn = () => interactors.answerQuestion(badAnswer, getGameById, saveGame)
        expect(badfn).to.throw(TypeError)
        badAnswer = Object.assign({}, answer, {value: 1})
        badfn = () => interactors.answerQuestion(badAnswer, getGameById, saveGame)
        expect(badfn).to.throw(TypeError)
      })
    })
    describe('where props are missing', () => {
      it('should throw an error', () => {
        let badAnswer = {gameId: "1", questionId: "1"}
        let badfn = () => interactors.answerQuestion(badAnswer, getGameById, saveGame)
        expect(badfn).to.throw()
        badAnswer = {gameId: "1", value: true}
        badfn = () => interactors.answerQuestion(badAnswer, getGameById, saveGame)
        expect(badfn).to.throw()
        badAnswer = {questionId: "1", value: true}
        badfn = () => interactors.answerQuestion(badAnswer, getGameById, saveGame)
        expect(badfn).to.throw()
      })
    })
  })
})