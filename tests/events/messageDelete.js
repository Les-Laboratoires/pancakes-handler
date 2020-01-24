const Event = require('../../src/classes/Event.js')
module.exports = class MessageDeleteEvent extends Event {
  constructor(...args) {
      super({
        ...args,
        name: "messageDelete"
      })
    },
    run(message) {
      console.log(`Message deleted (${message.id})`)
    }
}