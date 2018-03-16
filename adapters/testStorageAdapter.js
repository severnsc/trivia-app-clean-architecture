let games = []

const createGameAdapter = game => games = [...games, game]

const getGameByIdAdapter = id => {
  return games.find(game => game.id === id)
}

const updateGameAdapter = updatedGame => {
  return games = games.map(game => {
    return updatedGame.id === game.id
    ? updatedGame
    : game
  })
}

module.exports = {
  createGameAdapter,
  getGameByIdAdapter,
  updateGameAdapter
}