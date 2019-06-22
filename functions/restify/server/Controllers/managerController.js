const { FfmpegController } = require('./ffmpegController')
const { StorageController } = require('./storageController')
import { NotFoundException } from '../Responses/Exceptions/NotFoundException'
import { isUrl, absolutePath, minMinute } from '../../../../utils'
import { Success } from '../Responses/Messages/Success'

export class ManagerController {
  constructor() {
    this.ffmpegController = new FfmpegController()
    this.storageController = new StorageController()
  }

  /**
   *
   * @param {object[]} files List of data files.
   * @param {object} settings Settings.
   */
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
      './test/videos/w_dos.mp4',
      './test/videos/w_dos.mp4',
      './test/videos/w_dos.mp4',
      './test/videos/w_tres.mp4'
    ]

    try {
      const results = await this.ffmpegController.probeFiles(desPaths)
      console.log('Probe results ', results)

      // Video with the lower minute
      const endTime = minMinute(results.map(i => i.duration))
      const ruta = await this.ffmpegController.mergeFiles(desPaths, fps)
      const rutaCortada = await this.ffmpegController.cutFile(ruta, 'webm', {
        startTime: 0,
        endTime
      })
      return rutaCortada
    } catch (e) {
      console.log('error')
      throw new NotFoundException(e.message)
    }
  }
}
