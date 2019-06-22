import { ffprobe, ffmpeg } from '../../../ffmpeg/merge'
import { NotFoundException } from '../Responses/Exceptions/NotFoundException'

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
    if (listFiles.length !== 4) {
      throw new NotFoundException('No hay 4 videos.')
    }
    /*let args = [
      '-filter_complex',
      '"nullsrc=size=640x480 [base]; [0:v] setpts=PTS-STARTPTS, scale=320x240 [upperleft]; [1:v] setpts=PTS-STARTPTS, scale=320x240 [upperright]; [2:v] setpts=PTS-STARTPTS, scale=320x240 [lowerleft]; [3:v] setpts=PTS-STARTPTS, scale=320x240 [lowerright]; [base][upperleft] overlay=shortest=1 [tmp1]; [tmp1][upperright] overlay=shortest=1:x=320 [tmp2]; [tmp2][lowerleft] overlay=shortest=1:y=240 [tmp3]; [tmp3][lowerright] overlay=shortest=1:x=320:y=240"',
      `-r ${fps}`
    ]*/

    let args = [
      '-filter_complex',
      'scale=120:-1,tile=4x1',
      `-r ${fps}`
    ]

    return await ffmpeg(listFiles, 'webm', args)
  }

  async cutFile(file, extension, times) {
    /*if (listFiles.length !== 4) {
      throw new NotFoundException('No hay 4 videos.')
    }*/

    //ffmpeg -i movie.mp4 -vf trim=3:8 cut.mp4

    //ffmpeg -i input.wmv -ss 60 -t 60 -acodec copy -vcodec copy output.wmv
    let args = [
      //'-vf',
      //'trim=',
      `-threads 4 -ss ${times.startTime} -to ${times.endTime} -async 1` //,
      //beginning.toString()+":"+end.toString()
    ]

    return await ffmpeg([file], extension, args)
  }
}
