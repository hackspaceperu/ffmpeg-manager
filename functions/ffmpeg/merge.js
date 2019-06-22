import { path } from 'path'
import { outputDirectory, mergeArgs, mergeInputFiles } from '../../utils'
import { spawn, execFile } from 'child_process'

export function ffmpeg(file, ext="webm", ffmpegArgs) {
  return new Promise((resolve, reject) => {
    const optDirectory = outputDirectory('mergedVideo', ext)
    const args = [
      '-y',
      '-loglevel',
      'warning',
      mergeInputFiles(file),
      ...(ffmpegArgs || []),
      optDirectory
    ]

    console.log(args.join(' '))
    console.log('Running: ffmpeg', mergeArgs(args))

    const opts = { shell: true }

    const child = spawn('ffmpeg', args, opts)
      .on('message', msg => console.log(msg))
      .on('error', reject)
      .on('close', () => resolve(optDirectory))

    child.stdout.on('data', data => process.stdout.write(data))
    child.stderr.on('data', data => process.stdout.write(data))
  })
}

export function ffprobe(file) {
  return new Promise((resolve, reject) => {
    const args = [
      '-v',
      'quiet',
      '-print_format',
      'json',
      '-show_format',
      '-show_streams',
      '-i',
      file
    ]

    const opts = {}

    const cb = (error, stdout) => {
      if (error) reject(error)

      const result = JSON.parse(stdout)

      if (!result.streams) return reject('This file has no streams')

      const isValidFile = result.streams.some(
        ({ codec_type, duration }) =>
          codec_type === 'video' || codec_type === 'audio'
      )

      if (!isValidFile) {
        return reject('FFprobe: no valid media stream found')
      } else {
        console.log('Valid file found. FFProbe finished')
        let o = {
          'start': parseInt(result.start_time),
          'duration': parseInt(result.duration),
        }
        return resolve(o)
      }
    }
    const child = execFile('ffprobe', args, opts, cb).on('error', reject)
  })
}
