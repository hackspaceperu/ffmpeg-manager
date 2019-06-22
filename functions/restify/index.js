const restify = require('restify')
const corsMiddleware = require('restify-cors-middleware')
const server = restify.createServer({
  name : 'ffmpeg-manager'
})

const cors = corsMiddleware({
 
  origins: ['*'],
  allowHeaders: [],
  exposeHeaders: ['']
})

server.pre(cors.preflight)
server.use(cors.actual)

server.listen(process.env.APP_PORT, () => {
  console.log('ready on ', server.url)
})

server.get('/', (req, res ) => {
  res.send('Gooo ')
})

