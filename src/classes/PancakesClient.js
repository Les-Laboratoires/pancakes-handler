const Discord = require('discord.js');

module.exports = class PancakesClient extends Discord.Client {
  constructor(...args) {
    super(...args)
    this.owners = args.owners
  }
  isOwner(id) {
    return this.owners.includes(id)
  }
}