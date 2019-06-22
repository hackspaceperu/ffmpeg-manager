const { FfmpegController } = require('./ffmpegController')
const { StorageController } = require('./storageController')
import { NotFoundException } from '../Responses/Exceptions/NotFoundException'
import { isUrl, absolutePath } from '../../../../utils'
import { Success } from '../Responses/Messages/Success'

export class ManagerController {
  constructor() {
    this.ffmpegController = new FfmpegController()
    this.storageController = new StorageController()
  }

  async createMosaic(files, settings) {
    if (!files || !settings) {
      throw new NotFoundException('Missing files or settings.')
    }

    const { fps } = settings
    console.log(`fps are ${fps}`)

    const fileRefs = files.map(item => item.ref)

    // const desPaths = await Promise.all(
    //   fileRefs.map(
    //     ref =>
    //       new Promise((resolve, reject) => {
    //         // Llamar a download
    //         if (isUrl(ref)) {
    //           resolve('Es url')
    //         } else {
    //           resolve('Noes url')
    //         }
    //       })
    //   )
    // )

    const desPaths = [
      './test/min2i.webm',
      './test/dos.mp4',
      './test/min2i.webm',
      './test/min2i.webm'
    ]

    try {
      const results = await this.ffmpegController.probeFiles(desPaths)
      const ruta = await this.ffmpegController.mergeFiles(desPaths, fps)
      return ruta
    } catch (e) {
      console.log('error')
      throw new NotFoundException(e.message)
    }
  }
}
