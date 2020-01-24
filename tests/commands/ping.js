const Command = require('../../src/classes/Command.js')
module.exports = class PingCommand extends Command { // Extends of Command
  constructor(...args) {
    super({ // Passing command arguments
      ...args, // Passing filepath, PancakesHandler instance
      name: "ping", // Set command's name

      aliases: ['pingu'], // Set command's aliases

      permissions: ["BAN_MEMBERS", "|", "KICK_MEMBERS"], // Preprocessor

      args: [ // Set args for command
        {
          name: "user", // Arg name

          value: "types.custom.moderator", // Arg value checker (preprocessor)

          required: true // Whether the arg is required or not
          // Custom args for preprocessor
        }
      ]
      preprocessors: [ // Load preprocessor only for this command
        'preprocessors.custom.onlyModerator',
        'preprocessors.custom.cooldown'
      ]
      nsfwOnly: true,
      onlyModerator: false,
      cooldown: 5000 // Custom args for Preprocessors

    })
  }
  run(message, args) { // Execute command
    message.reply('Pong ! ' + args.user.id)
  }
}