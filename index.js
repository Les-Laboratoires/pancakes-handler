module.exports = {
  PancakesHandler: require('./src/classes/PancakesHandler.js'),
  PancakesClient: require('./src/classes/PancakesClient.js'),
  Command: require('./src/classes/command/Command.js'),
  CommandManager: require('./src/classes/command/CommandManager.js'),
  Event: require('./src/classes/event/Event.js'),
  EventManager: require('./src/classes/event/EventManager.js'),
  Type: require('./src/classes/type/Type.js'),
  TypeManager: require('./src/classes/type/TypeManager.js'),
  Preprocessor: require('./src/classes/preprocessor/Preprocessor.js'),
  PreprocessorManager: require('./src/classes/preprocessor/PreprocessorManager.js'),
  CustomError: require('./src/classes/error/CustomError.js'),
  CustomErrorManager: require('./src/classes/error/CustomErrorManager')
}