const PancakesModule = require('../PancakesModule.js')
module.exports = class Event extends PancakesModule {
  constructor(props) {
    super(props.instance)
    // Checks
    if (!this.props.name) return Error('Event name is a required property')
  }
}