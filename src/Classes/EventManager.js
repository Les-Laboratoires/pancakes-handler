moudle.exports = class CommandManager extends Map {
  constructor(instance, ...args) {
    super(...args);
    this.instance = instance
  }
  addEvent(event) {
    const e = new event.event()
    if (!e.run) {
      return console.log(`[ERROR] Event ${event.path} doesnt have run method`)
    }
    this.set(c.name, {
      command: command.command,
      path: command.path,
      name: c.name
    })
  }
  getEventListeners(name) {
    return this.find(e => e.name === name)
  }
}