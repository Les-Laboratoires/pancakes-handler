const Type = require('../../src/classes/Type.js')
module.exports = new ModeratorType extends Type {
  constructor(...args) {
    super({
      ...args
      name: "moderator"
    })
  }
  run(arg, message) {
    return message.member.permissions.has('KICK_MEMBERS')
  }
}