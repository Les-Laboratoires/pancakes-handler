const PancakesModule = require('../PancakesModule.js')
module.exports = class Command extends PancakesModule {
  constructor(props) {
    super(props.instance)
    this.props = props

    // Checks
    if (!this.props.name) return Error('Name is a required property.')
    if (this._instance._commands.getCommand(this.props.name)) return Error(`Name ${this.props.name} is already used`)
    if (typeof this.props.name !== "string") return Error("Name must be of type string")

    if (this.props.aliases && typeof this.props.aliases !== "array") return Error('Aliases property must be of type Array')
    else if (this.props.aliases && this.props.aliases.every(alias => typeof alias !== "string" || !alias)) return Error('Aliases must be of type String and not null')
    if (!this.props.aliases.every(alias => !this_.instance.getCommand(alias))) return Error('Aliases must not be name of commands or other aliases')

    if (this.props.args && typeof this.props.args !== "array") return Error('Args property must be of type Array')
    else if (this.props.args && this.props.args.every(arg => typeof arg !== "object")) return Error('Args must be of type Object')
    else if (this.props.args && this.props.args.every(arg => {
        if (!arg.name || typeof arg.name !== "string") return false
        if (!arg.value || typeof arg.value !== "string") return false
        return true
      })) return Error('Args are not built correctly.')
  }
}