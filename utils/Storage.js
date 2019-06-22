import { createWriteStream, createReadStream, readdirSync } from 'fs'
import { join, basename } from 'path'
import { tmpdir } from 'os'

import { s3 } from '../backing/config/aws'

export function download(params) {
  const { Bucket, Key } = params
  console.log(`Downloading file: ${Key} from bucket: ${Bucket}`)
  return new Promise((resolve, reject) => {
    const destPath = join(tmpdir(), basename(Key))
    console.log('this is destionation path:', destPath)
    const file = createWriteStream(destPath)
    file.on('close', () => resolve(destPath))
    file.on('error', reject)

    s3.getObject({ Bucket, Key })
      .on('error', reject)
      .createReadStream()
      .pipe(file)
  })
}

export function upload(params) {
  const { Bucket, Key, ContentType } = params
  console.log('This is contentType:', ContentType)
  return s3
    .putObject(params)
    .on('httpUploadProgress', ({ loaded, total }) => {
      console.log(
        `Uploading ${Key} to ${Bucket}: (${Math.round(
          (100 * loaded) / total
        )}%) ${loaded} / ${total}`
      )
    })
    .promise()
}
