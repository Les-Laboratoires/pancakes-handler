const Discord = require('discord.js')
const readRecursive = require('../Tools/readRecursive.js')

class CommandHandler {

  constructor(config, clientOptions) {
    this._client = new Discord.Client(clientOptions)
    this._config = config
    this._commands = new CommandManager()
    this._events = new EventManager()
  }
  launch(token) {
    this._client.login(token)
    readRecursive(this._config.commandsFolder).then(files => {

    })
    // Handle commands and events
  }
}