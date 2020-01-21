moudle.exports = class CommandManager extends Map {
  constructor(instance, ...args) {
    super(...args);
    this.instance = instance
  }
  addCommand(command) {
    const c = new command.command()
    if (this.get(c.name)) {
      return console.log(`[ERROR] Command ${command.path} name is already taken (${c.name})`)
    }
    if (!c.run) {
      return console.log(`[ERROR] Command ${command.path} doesnt have run method`)
    }
    this.set(c.name, {
      command: command.command,
      path: command.path,
      name: c.name
    })
  }
  getCommand(nameOrAlias) {
    return this.find(c => c.name === nameOrAlias || c.aliases.includes(nameOrAlias))
  }
  removeCommand(nameOrAlias) {
    const command = this.getCommand(nameOrAlias)
    this.delete(nameOrAlias)
    return command
  }
  reloadCommand(nameOrAlias) {
    const command = this.removeCommand(nameOrAlias)
    delete require.cache[command.command.path]
    command.command = require(command.path)
    this.add(command)
  }
}