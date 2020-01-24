const {
  readdir
} = require('fs').promises
module.exports = class TypeManager extends Map {
  constructor(instance, ...args) {
    super(...args);
    this._instance = instance
  }
  async fetch(folder) {
    const files = await readdir(folder)
    files.children.forEach(file => {
      if (!file.endsWith('.js')) {
        return this.addType({
          path: file.path,
          type: require(file.path)
        })
        delete require.cache[file.path]
      }
    })
  }
  addType(type) {
    const t = new type.type({
      instance: this._instance
    })
    if (this.get(t.props.name)) {
      return console.log(`[ERROR] Type ${type.path} name is already taken (${t.props.name})`)
    }
    if (!t.run) {
      return console.log(`[ERROR] Type ${type.path} doesnt have run method`)
    }
    this.set(t.props.name, {
      type: type.type,
      path: type.path,
      name: t.props.name
    })
  }
  getType(name) {
    return this.get(name)
  }
  removeType(name) {
    const type = this.getType(name)
    this.delete(name)
    return type
  }
  reloadType(name) {
    const type = this.removeType(name)
    delete require.cache[type.path]
    type.type = require(command.path)
    this.add(type)
  }
}