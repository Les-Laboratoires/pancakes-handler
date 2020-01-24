const Type = require('../../src/Classes/Type.js')
module.exports = new ModeratorType extends Type {
  constructor() {
    super({
      name: "moderator"
    })
  }
  run(arg, message) {
    return message.member.permissions.has('KICK_MEMBERS')
  }
}