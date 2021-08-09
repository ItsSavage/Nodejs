const mineflayer = require('mineflayer')
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder')
const pvp = require('mineflayer-pvp').plugin
 
const bot = mineflayer.createBot({ 'Guard' })
 
bot.loadPlugin(pathfinder)
bot.loadPlugin(pvp)
 
bot.on('chat', (username, message) => {
  if (message === 'fight me') {
    const player = bot.players[username]
 
    if (!player) {
      bot.chat("I can't see you.")
      return
    }
 
    bot.pvp.attack(player.entity)
  }
 
  if (message === 'stop') {
    bot.pvp.stop()
  }
})
