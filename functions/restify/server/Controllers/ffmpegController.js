module.exports = class FmmpegController {
  /**
   * Read file and return their information.
   * @param {string} path file path.
   * @returns {object} the information of file.
   */
  async probe(path) {
    // Call to service to probe
    console.log(`Probing`)
    return 0
  }

  /**
   * Merge a list of videos.
   * @param {string[]} listFile list of file pahts the videos to merge.
   * @returns {string} the filepath of the merged video.
   */
  async mergeFile(listFile) {
    console.log(`Merging file`)
    return 0
  }
}
