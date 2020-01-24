module.exports = class Event {
  constructor(props) {
    this.props = {
      ...props,
      filepath: __filename
    }
    // Checks
    if (!this.props.name) return Error('Event name is a required property')
  }
}