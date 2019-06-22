import { ffprobe, ffmpeg } from '../../../ffmpeg/merge'

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
  async mergeFiles(listFiles) {
    let args = [
      '-filter_complex',
      '"nullsrc=size=640x480 [base]; [0:v] setpts=PTS-STARTPTS, scale=320x240 [upperleft]; [1:v] setpts=PTS-STARTPTS, scale=320x240 [upperright]; [2:v] setpts=PTS-STARTPTS, scale=320x240 [lowerleft]; [3:v] setpts=PTS-STARTPTS, scale=320x240 [lowerright]; [base][upperleft] overlay=shortest=1 [tmp1]; [tmp1][upperright] overlay=shortest=1:x=320 [tmp2]; [tmp2][lowerleft] overlay=shortest=1:y=240 [tmp3]; [tmp3][lowerright] overlay=shortest=1:x=320:y=240"'
    ]

    return await ffmpeg(listFiles, 'webm', args)
  }
}
