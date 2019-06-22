import { VideoController } from '../../Controllers/videoController'
import { Success } from '../../Responses/Messages/Success'
import { NotFound } from '../../Responses/Messages/NotFound'
import { BadRequest } from '../../Responses/Messages/BadRequest'

const RR = require('restify-router')
const router = new RR.Router()
const videoController = new VideoController()


router.post("/upload", (req, res) => {
  // get route from local device
  const { Bucket, Key } = req.body
  const params = {
    Bucket,
    Key
  }
  try {
      const videoPath = await videoController.upload(params)
      return Success(res, videoPath)
  } catch (error) {
    if (error instanceof NotFoundException) {
      NotFound(res, error.message)
    } else {
      BadRequest(res, error.message)
    }
  }
})

router.post("/download", (req, res) => {
  const { Bucket, Key, ContentType } = req.body
  const params = {
    Bucket,
    Key,
    ContentType
  }
  try {
      const videoPath = await videoController.upload(params)
      return Success(res, videoPath)
  } catch (error) {
    if (error instanceof NotFoundException) {
      NotFound(res, error.message)
    } else {
      BadRequest(res, error.message)
    }
  }
})

export default router;