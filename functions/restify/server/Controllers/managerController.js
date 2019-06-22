const { FfmpegController } = require('./ffmpegController')
const StorageController = require('./storageController')
import { NotFoundException } from '../Responses/Exceptions/NotFoundException'
import { isUrl, absolutePath } from '../../../../utils'

export class ManagerController {
  constructor() {
    this.ffmpegController = new FfmpegController()
    this.storageController = new StorageController()
  }

  async createMosaic(files, settings) {
    if (!files || !settings) {
      throw new NotFoundException('Missing files or settings.')
    }
    // const desPaths = await Promise.all(
    //   files.map(
    //     filePath =>
    //       new Promise((resolve, reject) => {
    //         // Llamar a download
    //         if (isUrl(filePath)) {
    //           resolve('Es url')
    //         } else {
    //           resolve('Noes url')
    //         }
    //       })
    //   )
    // )

    const desPaths = [
      './test/min2i.webm',
      './test/min2i.webm',
      './test/min2i.webm',
      './test/min2i.webm'
    ]

    try {
      const results = await this.ffmpegController.probeFiles(desPaths)
      const ruta = await this.ffmpegController.mergeFiles(desPaths)
      console.log(results, ruta)
    } catch (e) {
      console.log('error')
      throw new NotFoundException(e.message)
    }
  }
}
