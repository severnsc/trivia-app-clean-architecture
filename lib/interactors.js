const entities = require('./entities')

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
        throw new TypeError('answer.gameId must be a string!')
      }

      if(typeof answer.questionId !== 'string'){
        throw new TypeError('answer.questionId must be a string!')
      }

      if(!['string', 'boolean'].includes(typeof answer.value)){
        throw new TypeError('answer.value must be a string or boolean!')
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
  
    const numberCorrect = game.answers.reduce((total, answer) => {
      const currentQuestion = game.questions.find(question => 
        question.id === answer.questionId
      )
      if(currentQuestion.correctAnswer === answer.value){
        return total + 1
      }
    }, 0)

    const totalAnswered = game.answers.length

    return {
      gameId,
      numberCorrect,
      totalAnswered
    }
  }
}

module.exports = {
  createGameWithQuestions,
  answerQuestion,
  getGameStatistics
}