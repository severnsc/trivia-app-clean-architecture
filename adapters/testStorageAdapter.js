let games = []

const createGame = game => games = [...games, game]

const updateGame = updatedGame => {
  return games = games.map(game => {
    return updatedGame.id === game.id
    ? updatedGame
    : game
  })
}

module.exports = {
  createGame,
  updateGame
}