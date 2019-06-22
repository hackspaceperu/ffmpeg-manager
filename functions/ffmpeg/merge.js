import {
    NotFoundException
} from '../../functions/restify/server/Responses/Exceptions/NotFoundException'
import {
    path
} from 'path'
import {
    outputDirectory,
    mergeArgs
} from 'utils'
import {
    BadRequest,
    InternalServerError
} from '../../functions/restify/server/Responses/Messages'

export function ffmpeg(file, ext, ffmpegArgs) {
    return new Promise((resolve, reject) => {
        const optDirectory = outputDirectory(file, ext)
        if (path.basename(optDirectory) !== path.basename(file)) {
            const args = [
                '-y',
                '-loglevel',
                'warning',
                '-i',
                file,
                ...(ffmpegArgs || []),
                optDirectory
            ]

            console.log('Running: ffmpeg', mergeArgs(args))

            const opts = {}

            const child = spawn('ffmpeg', args, opts)
                .on('message', msg => console.log(msg))
                .on('error', reject)
                .on('close', () => resolve(optDirectory))

            child.stdout.on('data', data => process.stdout.write(data))
            child.stderr.on('data', data => process.stdout.write(data))
        } else {
            throw new Error('Bad Request')
        }

    })
}

export function ffprobe(file) {
    return new Promise((resolve, reject) => {

        const args = [
            '-v', 'quiet',
            '-print_format', 'json',
            '-show_format',
            '-show_streams',
            '-i', file
        ]

        const opts = {}

        /* const cb = (error, stdout) => {
        if (error) reject(error);
  
        const result = JSON.parse(stdout)
  
        if (!result.streams) return reject('This file has no streams');
  
        const isValidFile = result.streams.some(({codec_type, duration}) =>
          (codec_type === 'video' || codec_type === 'audio')
        )
  
        if (!isValidFile) {
          return reject('FFprobe: no valid media stream found')
        } else {
          console.log('Valid file found. FFProbe finished')
          return resolve(result)
        }
      } */
        const child = spawn('ffprobe', args, opts, cb)
            .on('message', msg => console.log(msg))
            .on('error', reject)

        child.stdout.on('data', data => resolve(process.stdout.write(data)))
        child.stderr.on('data', data => reject(process.stdout.write(data)))
    })
}