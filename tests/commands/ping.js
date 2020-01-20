const Command = require('../../src/Classes/Command.js')
class PingCommand extends Command {
  constructor() {
    super({
      name: "ping",
      aliases: ['pingu'],
      permissions: ["BAN_MEMBERS", "|", "KICK_MEMBERS"],
      args: []
    })
  }
  run(client, message, args) {
    message.reply('Pong !')
  }
}
module.exports = PingCommand