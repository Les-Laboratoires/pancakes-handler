const CommandHandler = require('../src/Classes/CommandHandler')

const myCommandHandler = new CommandHandler({
  /* CommandHandler Options */
  commands: "./commands",
  events: "./events"
}, {
  /* DJS ClientOptions */
})
myCommandHandler.launch('TOKEN')