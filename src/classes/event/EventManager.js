moudle.exports = class CommandManager extends Map {
  constructor(instance, ...args) {
    super(...args);
    this._instance = instance
  }
  async fetch(folder) {
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
    const e = new event.event({
      instance: this._instance
    })
    if (!e.run) {
      return console.log(`[ERROR] Event ${event.path} doesnt have run method`)
    }
    this.set(Date.now(), {
      command: event.event,
      path: event.path,
      name: e.name
    })
    this.instance._client.on(e.name, e.run.bind(null, this.instance._client));
  }
  getEventListeners(name) {
    return this.find(e => e.name === name)
  }
}