const Event = require('../../src/classes/Event.js')
module.exports = class MessageDeleteEvent extends Event {
  constructor() {
      super({
        name: "messageDelete"
      })
    },
    run(client, message) {
      console.log(`Message deleted (${message.id})`)
    }
}