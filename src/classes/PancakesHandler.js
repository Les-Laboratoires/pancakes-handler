const PancakesClient = require('./PancakesClient.js')
const readRecursive = require('../Tools/readRecursive.js')
const CommandManager = require('./CommandManager.js')
const EventManager = require('./EventManager.js')
const TypeManager = require('./TypeManager.js')
const PreprocessorManager = require('./PreprocessorManager.js')

class PancakesHandler {

  constructor(config, clientOptions) {
    this._client = new PancakesClient(clientOptions)
    this._config = config
    this._commands = new CommandManager(this)
    this._events = new EventManager(this)
    this._preprocessors = new PreprocessorManager(this)
    this._types = new TypeManager(this)
  }
  launch(token) {
    this._client.login(token)
    this._commands.fetch(this._config.commandsFolder)
    this._events.fetch(this._config.eventsFolder)
    this._types.fetch(this._config.typesFolder)
    this._preprocessors.fetch(this._config.preprocessorsFolder)
  }
}