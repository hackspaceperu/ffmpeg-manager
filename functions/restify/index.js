const restify = require('restify')
const corsMiddleware = require('restify-cors-middleware')
const server = restify.createServer({
  name: 'ffmpeg-manager'
})
import MovieMaker from '../restify/server/Routes/MovieMaker'

const cors = corsMiddleware({
  origins: ['*'],
  allowHeaders: [],
  exposeHeaders: ['']
})

const RR = require('restify-router')

const router = new RR.Router()

server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())
server.pre(cors.preflight)
server.use(cors.actual)

router.add('/movie-maker', MovieMaker)
router.applyRoutes(server)

server.listen(process.env.APP_PORT, () => {
  console.log('ready on ', server.url)
})

server.get('/', (req, res) => {
  res.send('Gooo ')
})
