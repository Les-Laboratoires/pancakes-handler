const Discord = require('discord.js')
const readRecursive = require('../Tools/readRecursive.js')

class CommandHandler {

  constructor(config, clientOptions) {
    this._client = new Discord.Client(clientOptions)
    this._config = config
    this._commands = new CommandManager(this)
    this._events = new EventManager(this)
  }
  launch(token) {
    this._client.login(token)
    this.handleCommands(this._config.commandsFolder)
    this.handleEvents(this._config.eventsFolder)
  }
  async handleCommands(folder) {
    const files await readRecursive(folder)
    files.children.forEach(file => {
      if (file.type === "file") {
        if (!file.endsWith('.js')) {
          return this._commands.add({
            path: file.path,
            command: require(file.path)
          })
          delete require.cache[file.path]
        }
      } else {
        this.handleCommands(file)
      }
    })
  }
  handleEvents(folder) {
    const files = await fs.readdir(folder)
    files.forEach(file => {
      if (!file.endsWith('.js')) {
        return this._events.add({
          path: file.path,
          event: require(file.path)
        })
        delete require.cache[file.path]
      }
    })
  }
}