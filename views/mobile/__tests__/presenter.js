import { createGamePresenter, answerQuestionPresenter } from '../presenter'

const testGame = {
  id: "1",
  questions: [
    {id: "1", category: "Entertainment", text: 'foo', correctAnswer: "True", incorrectAnswers: ["False"]},
    {id: "2", category: "Entertainment", text: 'bar', correctAnswer: "True", incorrectAnswers: ["False"]}
  ],
  answers: [],
  complete: false
}

describe('createGame', () => {
  describe('happy path', () => {
    it('should return a game view model with current question', async () => {
      const createGameAsync = () => Promise.resolve(testGame)
      const gameModel = await createGamePresenter(createGameAsync)()
      expect(typeof gameModel).toBe('object')
      expect(typeof gameModel.currentQuestionModel).toBe('object')
      const currentQuestionModel = gameModel.currentQuestionModel
      expect(currentQuestionModel.id).toBe("1")
      expect(currentQuestionModel.questionCategory).toBe("Entertainment")
      expect(currentQuestionModel.questionText).toBe("foo")
      expect(currentQuestionModel.answers).toEqual(["False", "True"])
      expect(currentQuestionModel.questionNumber).toBe(1)
    })
  })

  describe('passing bad func', () => {
    it('should throw an error', () => {
      const errorFn = () => {throw new Error}
      createGamePresenter(errorFn)().catch(err => expect(typeof err).toBe('string'))
    })
  })
})

describe('answerQuestion', () => {
  describe('happy path not completed', () => {
    it('should return game model with next question', () => {
      const answer = {gameId: "1", questionId: "1", value: "True"}
      const dispatchAnswerQuestion = () => Object.assign({}, testGame, {answers: [answer]})
      const getGameStatistics = () => {}
      const gameModel = answerQuestionPresenter(dispatchAnswerQuestion)(getGameStatistics)(answer)
      expect(typeof gameModel).toBe('object')
      expect(typeof gameModel.currentQuestionModel).toBe('object')
      const currentQuestionModel = gameModel.currentQuestionModel
      expect(currentQuestionModel.id).toBe("2")
      expect(currentQuestionModel.questionCategory).toBe('Entertainment')
      expect(currentQuestionModel.questionText).toBe('bar')
      expect(currentQuestionModel.answers).toEqual(["False", "True"])
      expect(currentQuestionModel.questionNumber).toBe(2)
    })
  })
  describe('happy path completed', () => {
    it('should return completed game model', () => {
      const gameToComplete = Object.assign({}, testGame, {answers: [{gameId: "1", questionId: "1", value: "True"}]})
      const answer = {gameId: "1", questionId: "2", value: "True"}
      const dispatchAnswerQuestion = answer => Object.assign({}, gameToComplete, {answers: [...gameToComplete.answers, answer], complete: true})
      const getGameStatistics = () => ({
        gameId: "1",
        totalCorrect: 2,
        totalAnswered: 2
      })
      const completedGameModel = answerQuestionPresenter(dispatchAnswerQuestion)(getGameStatistics)(answer)
      expect(typeof completedGameModel).toBe('object')
      expect(completedGameModel.questions).toBeInstanceOf(Array)
      completedGameModel.questions.forEach(question => {
        expect(typeof question).toBe('object')
        expect(typeof question.id).toBe('string')
        expect(typeof question.text).toBe('string')
        expect(typeof question.correctAnswer).toBe('string')
      })
      expect(completedGameModel.answers).toBeInstanceOf(Array)
      completedGameModel.answers.forEach(answer => {
        expect(typeof answer).toBe('string')
      })
      expect(completedGameModel.totalCorrect).toBe(2)
      expect(completedGameModel.totalAnswered).toBe(2)
    })
  })
})