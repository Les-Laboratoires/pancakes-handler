const Discord = require('discord.js')
const readRecursive = require('../Tools/readRecursive.js')
const CommandManager = require('./CommandManager.js')
const EventManager = require('./EventManager.js')

class CommandHandler {

  constructor(config, clientOptions) {
    this._client = new Discord.Client(clientOptions)
    this._config = config
    this._commands = new CommandManager(this)
    this._events = new EventManager(this)
  }
  launch(token) {
    this._client.login(token)
    this._commands.fetchCommands(this._config.commandsFolder)
    this._events.fetchEvents(this._config.eventsFolder)
    this.handleCommands(this._config.commandsFolder)
    this.handleEvents(this._config.eventsFolder)
  }
}