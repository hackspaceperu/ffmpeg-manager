const path = require('path')
const fs = require('fs')
const os = require('os')

const absolutePath = file => {
  return path.normalize(path.join(__dirname, file))
}

/*const createPath = file => {
  const dir = './tmp'
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  return path.normalize(path.join('/', hashingName, file))
}*/

const hashingName = () =>
  `ffmpeg-output-${Math.random()
    .toString(36)
    .substring(7)}`

/*const laFuncion=(
  files,//array de files de videos
  time//tiempo minimo de los videos
  )=>{
}*/

const isUrl = val => {
  const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
  const regex = new RegExp(expression)
  return !!val.match(regex)
}

/*const args = [
  '-v',
  'quiet',
  '-print_format',
  'json',
  '-show_format',
  '-show_streams',
  '-i'
]*/

const mergeArgs = arguments => {
  return (arguments || []).join(' ')
}

const outputDirectory = (file, extension) => {
  const output = path.join(os.tmpdir(), hashingName())
  if (!fs.existsSync(output)) {
    fs.mkdirSync(output)
  }
  return `${path.join(
    output,
    path.basename(file, path.extname(file))
  )}.${extension}`
}

/*console.log(mergeArgs(args))
console.log('gg pes', mergeArgs())
console.log('hashing', hashingName())
console.log('path', absolutePath('./../gg'))
console.log('output', outputDirectory('gg', 'abs'))
console.log('val', isUrl('https://github.com/Rogger794?tab=repositories'))
*/

export {
  absolutePath,
  //createPath,
  hashingName,
  isUrl,
  mergeArgs,
  outputDirectory
}

//ver si un string es url o no
