const PancakesModule = require('../PancakesModule.js')
module.exports = class Type extends PancakesModule {
  constructor(props) {
    super(props.instance)
    this.props = props
    if (!this.props.name) return Error('Type name is a required property')
  }
}