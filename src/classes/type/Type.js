module.exports = class Type {
  constructor(props) {
    this.props = props
    if (!this.props.name) return Error('Type name is a required property')
  }
}