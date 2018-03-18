const entities = require('./entities')
const utils = require('../utils')

const createGameWithQuestions = getQuestions => {
  return createGame => {
    return async () => {
      const questionEntities = await getQuestions().catch(err => {throw err})
      const game = entities.createGame(questionEntities)
      createGame(game)
      return game
    }
  }
}

const answerQuestion = getGameById => {
  
  return updateGame => {
    
    return answer => {

      if(typeof answer.gameId !== 'string'){
        throw new TypeError(utils.constructErrorMessage('answer.gameId', "string", answer.gameId))
      }

      if(typeof answer.questionId !== 'string'){
        throw new TypeError(utils.constructErrorMessage("answer.questionId", "string", answer.questionId))
      }

      if(!['string', 'boolean'].includes(typeof answer.value)){
        throw new TypeError(utils.constructErrorMessage('answer.value', "string or boolean", answer.value))
      }

      const game = getGameById(answer.gameId)
      const updatedGame = Object.assign({}, game, {answers: [...game.answers, answer]})
      
      if(updatedGame.answers.length === updatedGame.questions.length){
        const completedGame = Object.assign({}, updatedGame, {complete: true})
        updateGame(completedGame)
        return completedGame
      }else{
        updateGame(updatedGame)
        return updatedGame
      }
      
    }
  }
}

const getGameStatistics = getGameById => {
  return gameId => {
    const game = getGameById(gameId)
  
    const totalCorrect = game.answers.reduce((total, answer) => {
      const currentQuestion = game.questions.find(question => 
        question.id === answer.questionId
      )
      if(currentQuestion.correctAnswer === answer.value){
        return total + 1
      }else{
        return total
      }
    }, 0)

    const totalAnswered = game.answers.length

    return {
      gameId,
      totalCorrect,
      totalAnswered
    }
  }
}

module.exports = {
  createGameWithQuestions,
  answerQuestion,
  getGameStatistics
}