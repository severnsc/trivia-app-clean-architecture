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
    answers: [],
    complete: false
  })

  const saveGame = () => {
    console.log('game saved!')
  }

  let badAnswer

  const badfn = () => interactors.answerQuestion(getGameById)(saveGame)

  describe('happy path', () => {
    it('should append answer object to the game\'s answers', () => {
      const updatedGame = interactors.answerQuestion(getGameById)(saveGame)(answer)
      updatedGame.answers.should.be.an('array')
      updatedGame.answers.should.be.lengthOf(1)
      updatedGame.answers[0].should.equal(answer)
      updatedGame.complete.should.equal(true)
    })
  })
  describe('misformatted answer object', () => {
    describe('where arguments are the wrong types', () => {
      it('should throw a TypeError', () => {
        badAnswer = Object.assign({}, answer, {gameId: 1})
        expect(badfn(badAnswer)).to.throw(TypeError)
        badAnswer = Object.assign({}, answer, {questionId: 1})
        expect(badfn(badAnswer)).to.throw(TypeError)
        badAnswer = Object.assign({}, answer, {value: 1})
        expect(badfn(badAnswer)).to.throw(TypeError)
      })
    })
    describe('where props are missing', () => {
      it('should throw an error', () => {
        badAnswer = {gameId: "1", questionId: "1"}
        expect(badfn(badAnswer)).to.throw()
        badAnswer = {gameId: "1", value: true}
        expect(badfn(badAnswer)).to.throw()
        badAnswer = {questionId: "1", value: true}
        expect(badfn(badAnswer)).to.throw()
      })
    })
  })
})