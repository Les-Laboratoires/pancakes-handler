moudle.exports = class CommandManager extends Map {
  constructor(instance, ...args) {
    super(...args);
    this.instance = instance
  }
  async fetchCommands(folder) {
    const files = await fs.readdir(folder)
    files.forEach(file => {
      if (!file.endsWith('.js')) {
        return this.addEvent({
          path: file.path,
          event: require(file.path)
        })
        delete require.cache[file.path]
      }
    })
  }
  addEvent(event) {
    const e = new event.event()
    if (!e.run) {
      return console.log(`[ERROR] Event ${event.path} doesnt have run method`)
    }
    this.set(Date.now(), {
      command: event.event,
      path: event.path,
      name: e.name
    })
  }
  getEventListeners(name) {
    return this.find(e => e.name === name)
  }
}