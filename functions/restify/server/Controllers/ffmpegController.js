import { ffprobe, ffmpeg } from '../../../ffmpeg/merge'

export class FmmpegController {
  /**
   * Read file and return their information.
   * @param {string[]} paths list of filepaths to probe.
   * @returns {object} the information of file.
   */
  async probeFiles(paths) {
    // Call to service to probe
    return await Promise.all(paths.map(path => ffprobe(path)))
  }

  /**
   * Merge a list of videos.
   * @param {string[]} listFile list of file pahts the videos to merge.
   * @returns {string} the filepath of the merged video.
   */
  async mergeFiles(listFile) {
    console.log(`Merging file`)
    return 0
  }
}
