const Discord = require('discord.js')
class CommandHandler {
  constructor(config, clientOptions) {
    this.#client = new Discord.Client(clientOptions)
    this.#config = config
    this.#commands = new CommandManager()
    this.#events = new EventManager()
  }
  launch(token) {
    this.#client.login(token)
    // Handle commands and events
  }
}