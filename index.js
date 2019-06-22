if (!global._babelPolyfill) {
  require('babel-polyfill')
}

require('dotenv').config()

const app = process.env.APP

require(`./handlers/${app}`)
