let games = []

const createGame = game => games = [...games, game]

const getGameById = id => {
  return games.find(game => game.id === id)
}

const updateGame = updatedGame => {
  return games = games.map(game => {
    return updatedGame.id === game.id
    ? updatedGame
    : game
  })
}

module.exports = {
  createGame,
  getGameById,
  updateGame
}