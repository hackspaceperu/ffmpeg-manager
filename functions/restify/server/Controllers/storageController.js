export class StorageController {
  async uploadFile(filePath) {
    console.log(`Uploading file ${filePath}`)
  }

  async downloadFile(key) {
    console.log(`Downloading file ${key}`)
  }
}
