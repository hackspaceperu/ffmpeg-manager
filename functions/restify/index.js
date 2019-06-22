const restify = require('restify')
const server = restify.createServer({
  name : 'ffmpeg-manager'
})

server.listen(process.env.APP_PORT, () => {
  console.log('ready on ', server.url)
})

server.get('/', (req, res ) => {
  res.send('Gooo ')
})

