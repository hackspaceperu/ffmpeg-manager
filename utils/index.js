import path from 'path'
import fs from 'fs'
import os from 'os'
/*const path = require('path')
const fs = require('fs')
const os = require('os')*/

const absolutePath = file => {
  return path.normalize(path.join(__dirname, file))
}

const forVstack = files => {
  return files.map((file,index)=>{
    return "["+index+":v]"
  }).join()
}

const transformTime = time => {
  const timeString = time.toString().split('.')
  let result = timeString[1] ? timeString[1] : ''
  //segundos
  let tiempo = Math.floor(time)
  const seconds = tiempo % 60
  result = ':' + (seconds < 10 ? '0' + seconds : seconds) + result

  //minutos
  tiempo = tiempo - seconds
  const minutos = Math.floor(tiempo / 60) % 60
  result = ':' + (minutos < 10 ? '0' + minutos : minutos) + result

  //horas
  tiempo = tiempo - minutos * 60
  const horas = Math.floor(tiempo / 3600)
  result = ':' + (hotas < 10 ? '0' + horas : horas) + result

  return result
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

const mergeArgs = args => {
  return (args || []).join(' ')
}

const mergeInputFiles = files => {
  const inputs = files.map(file => '-i ' + file.toString())
  return mergeArgs(inputs)
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

const minMinute = minutes => {
  return Math.min(...minutes)
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
  minMinute,
  //createPath,
  forVstack,
  hashingName,
  isUrl,
  mergeArgs,
  mergeInputFiles,
  outputDirectory,
  transformTime
}

//ver si un string es url o no
