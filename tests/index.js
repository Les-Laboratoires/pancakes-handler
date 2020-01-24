const PancakesHandler = require('../src/classes/PancakesHandler.js')

const myCommandHandler = new PancakesHandler({
  /* CommandHandler Options */
  commandsFolder: "./commands",
  eventsFolder: "./events",
  preprocessorsFolder: "./preprocessors",
  typesFolder: "./types"
}, {
  /* DJS ClientOptions */
  owners: ["272676235946098688"]
})
myCommandHandler.launch('TOKEN')