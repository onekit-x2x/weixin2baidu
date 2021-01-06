export default class LogManager {
  // eslint-disable-next-line class-methods-use-this
  debug(...args) {
    // eslint-disable-next-line no-console
    return console.debug(...args)
  }

  // eslint-disable-next-line class-methods-use-this
  info(...args) {
    // eslint-disable-next-line no-console
    return console.info(...args)
  }

  // eslint-disable-next-line class-methods-use-this
  log(...args) {
    // eslint-disable-next-line no-console
    return console.log(...args)
  }

  // eslint-disable-next-line class-methods-use-this
  warn(...args) {
    // eslint-disable-next-line no-console
    return console.warn(...args)
  }
}
