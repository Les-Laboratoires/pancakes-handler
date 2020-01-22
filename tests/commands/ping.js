const Command = require('../../src/Classes/Command.js')
module.exports = class PingCommand extends Command { // Extends of Command
  constructor() {
    super({ // Passing command arguments
      name: "ping", // Set command's name

      aliases: ['pingu'], // Set command's aliases

      permissions: ["BAN_MEMBERS", "|", "KICK_MEMBERS"], // Preprocessor

      args: [ // Set args for command
        {
          name: "user", // Arg name

          value: "preprocessors.custom.getUser", // Arg value checker (preprocessor)

          required: true // Whether the arg is required or not
          // Custom args for preprocessor
        }
      ]
      preprocessors: [ // Load preprocessor only for this command
        'preprocessors.custom.onlyModerator'
      ]
      // Custom args for Preprocessors
    })
  }
  run(client, message, args) { // Execute command
    message.reply('Pong !')
  }
}