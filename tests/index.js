const CommandHandler = require('../src/Classes/CommandHandler')

const myCommandHandler = new CommandHandler({
  /* CommandHandler Options */
  commandsFolder: "./commands",
  eventsFolder: "./events"
}, {
  /* DJS ClientOptions */
})
myCommandHandler.launch('TOKEN')