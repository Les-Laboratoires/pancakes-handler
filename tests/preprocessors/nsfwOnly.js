module.exports = class NSFWOnlyPreprocessor extends Preprocessor {
  constructor(...args) {
    super({
      ...args,
      name: "nsfwOnly",
      for: "*"
    })
  }
  run(message) {
    if (message.channel.nsfw) {
      return true
    } else {
      return this._instance.getError('errors.custom.NSFW_ONLY')
    }
  }
}