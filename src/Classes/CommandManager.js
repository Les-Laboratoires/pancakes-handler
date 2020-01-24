const readRecursive = require('../Tools/readRecursive.js')
module.exports = class CommandManager extends Map {
  constructor(instance, ...args) {
    super(...args);
    this.instance = instance
  }
  async fetchCommands(folder) {
    const files = await readRecursive(folder)
    files.children.forEach(file => {
      if (file.type === "file") {
        if (!file.endsWith('.js')) {
          return this.addCommand({
            path: file.path,
            command: require(file.path)
          })
          delete require.cache[file.path]
        }
      } else {
        this.fetchCommands(file)
      }
    })
  }
  addCommand(command) {
    const c = new command.command()
    if (this.get(c.props.name)) {
      return console.log(`[ERROR] Command ${command.path} name is already taken (${c.props.name})`)
    }
    if (!c.run) {
      return console.log(`[ERROR] Command ${command.path} doesnt have run method`)
    }
    this.set(c.name, {
      command: command.command,
      path: command.path,
      name: c.props.name
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