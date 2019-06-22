const FmmpegController = require('./ffmpegController')
const StorageController = require('./storageController')

export class ManagerController {
  constructor() {
    this.ffmpegController = new FmmpegController()
    this.storageController = new StorageController()
  }

  async createMosaic(files, settings) {
    console.log('holo')
    //   console.log(`Filess`, files, settings)
    //   const desPaths = await new Promise.all(
    //     filePaths.map(
    //       filePath =>
    //         new Promise((resolve, reject) => {
    //           resolve('Holo')
    //         })
    //     )
    //   )

    //   // Descargar archivos con promise all
    //   const destMergedFile = this.ffmpegController.mergeFile(files)

    //   try {
    //   } catch (e) {
    //     // llamar a excepcion filter
    //   }
    // }
  }
}
