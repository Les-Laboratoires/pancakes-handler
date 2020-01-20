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
    readRecursive(this._config.commandsFolder).then(files => {
      this.handleCommands(files)
    })
    fs.readdir(this._config.eventsFolder).then(files => {
      this.handleEvents(files, this._config.eventsFolder)
    })
  }
  handleCommands(files) {
    files.children.forEach(file => {
      if (file.type === "file") {
        if (!file.endsWith('.js')) {
          try {
            return this._commands.add({
              path: file.path,
              command: require(file.path)
            })
            delete require.cache[file.path]
          } catch (e) {
            console.log(`[ERROR] While booting. Failed to load command ${file.name}`)
          }
        }
      } else {
        this.handleCommands(file)
      }
    })
  }
  handleEvents(files, folder) {
    files.forEach(file => {
      if (!file.endsWith('.js')) {
        try {
          return this._events.add({
            path: file.path,
            event: require(file.path)
          })
          delete require.cache[file.path]
        } catch (e) {
          console.log(`[ERROR] While booting. Failed to load event ${file.name}`)
        }
      }
    })
  }
}