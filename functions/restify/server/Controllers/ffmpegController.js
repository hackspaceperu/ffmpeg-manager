import { ffprobe, ffmpeg } from '../../../ffmpeg/merge'
import { NotFoundException } from '../Responses/Exceptions/NotFoundException'
import { forVstack } from '../../../../utils'

export class FfmpegController {
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
  async mergeFiles(listFiles, fps) {
    if (listFiles.length !== 6) {
      throw new NotFoundException('No hay 4 videos.')
    }

    let args = `-filter_complex "nullsrc=size=640x480 [base]; [0:v] setpts=PTS-STARTPTS, scale=213x240 [upperleft]; [1:v] setpts=PTS-STARTPTS, scale=213x240 [uppermiddle]; [2:v] setpts=PTS-STARTPTS, scale=213x240 [upperleft]; [3:v] setpts=PTS-STARTPTS, scale=213x240 [lowerleft]; [4:v] setpts=PTS-STARTPTS, scale=213x240 [lowermiddle]; [5:v] setpts=PTS-STARTPTS, scale=213x240 [lowerright]; [base][upperleft] overlay=shortest=1 [tmp1]; [tmp1][uppermiddle] overlay=shortest=1:x=213 [tmp2]; [tmp2][upperleft] overlay=shortest=1:x=426 [tmp3]; [tmp3][lowerleft] overlay=shortest=1:y=240 [tmp4]; [tmp4][lowermiddle] overlay=shortest=1:y=240:x=213 [tmp5]; [tmp5][lowerright] overlay=shortest=1:y=240:x=426" -r ${fps}`

    args = args.split(' ')

    return await ffmpeg(listFiles, 'webm', args)
  }

  async cutFile(file, extension, times) {
    let args = [
      `-threads 4 -ss ${times.startTime} -to ${times.endTime} -async 1`
    ]

    return await ffmpeg([file], extension, args)
  }
}
