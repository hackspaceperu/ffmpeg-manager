require('dotenv').config()
const app = process.env.APP
require(`./handlers/${app}`)