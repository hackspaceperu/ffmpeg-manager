const FmmpegController = require('./ffmpegController')
const StorageController = require('./storageController')

module.exports = class ManagerController {
  constructor() {
    this.ffmpegController = new FmmpegController()
    this.storageController = new StorageController()
  }

  createMosaic(files, settings) {
    
    const desPaths = await new Promise.all(
      filePaths.map(
        filePath =>
          new Promise((resolve, reject) => {
            resolve('Holo')
          })
      )
    )


    // Descargar archivos con promise all
    const destMergedFile = this.ffmpegController.mergeFile(files)

    try {
      console.log(files, duration)
    } catch (e) {
      // llamar a excepcion filter
    }
  }
}
