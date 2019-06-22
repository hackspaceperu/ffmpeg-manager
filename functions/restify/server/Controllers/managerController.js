const FmmpegController = require('./ffmpegController')
const StorageController = require('./storageController')
import { NotFoundException } from '../Responses/Exceptions/NotFoundException'
import { isUrl, absolutePath } from '../../../../utils'
import { ffprobe, ffmpeg } from '../../../ffmpeg/merge'

export class ManagerController {
  constructor() {
    this.ffmpegController = new FmmpegController()
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

    const desPaths = ['./min2i.webm', 'alksajdfk']
    try {
      const results = await Promise.all(
        desPaths.map(destPath => ffprobe(destPath))
      )
      console.log('finish')
      console.log(results)
    } catch (e) {
      console.log('error')
      throw new NotFoundException(e.message)
    }

    // // Descargar archivos con promise all
    // const destMergedFile = this.ffmpegController.mergeFile(files)
    // try {
    // } catch (e) {
    //   // llamar a excepcion filter
    // }
  }
}
