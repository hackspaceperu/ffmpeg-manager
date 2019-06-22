const FmmpegController = require('./ffmpegController')
const StorageController = require('./storageController')
import { NotFoundException } from '../Responses/Exceptions/NotFoundException'

export class ManagerController {
  constructor() {
    this.ffmpegController = new FmmpegController()
    this.storageController = new StorageController()
  }

  async createMosaic(files, settings) {
    if (!files || !settings) {
      throw new NotFoundException('Missing files or settings.')
    }
    const desPaths = await Promise.all(
      files.map(
        filePath =>
          new Promise((resolve, reject) => {
            // Llamar a download
            resolve('Holo')
          })
      )
    )
    return desPaths
    // // Descargar archivos con promise all
    // const destMergedFile = this.ffmpegController.mergeFile(files)
    // try {
    // } catch (e) {
    //   // llamar a excepcion filter
    // }
  }
}
