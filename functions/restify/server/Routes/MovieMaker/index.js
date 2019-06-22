import { ManagerController } from '../../Controllers/managerController'
import { Success } from '../../Responses/Messages/Success'
import { NotFoundException } from '../../Responses/Exceptions/NotFoundException'
import { NotFound } from '../../Responses/Messages/NotFound'
import { BadRequest } from '../../Responses/Messages/BadRequest'
import { SyntaxServerError } from '../../Responses/Messages/SyntaxServer'

// declaring variables for server
const RR = require('restify-router')
const router = new RR.Router()
const managerController = new ManagerController()

// routes
// merge File
router.post('/merge', async (req, res) => {
  if (!req.body) {
    return BadRequest(res, 'Undefined request body.')
  }
  const { files, settings } = req.body

  // send paths to controller
  try {
    // the result should be the new path of the merged video
    const resultMerge = await managerController.createMosaic(files, settings)
    return Success(res, resultMerge)
  } catch (error) {
    if (error instanceof NotFoundException) {
      NotFound(res, error.message)
    } else {
      BadRequest(res, error.message)
    }
  }
})

// cut Video File
router.post('/clip', async (req, res) => {
  const { path, extension, times } = req.body

  try {
    // the result should be the new path of the merged video
    const resultClip = await videoController.cutFile(path, extension, times)
    return Success(res, resultMerge)
  } catch (error) {
    if (error instanceof NotFoundException) {
      NotFound(res, error.message)
    } else {
      BadRequest(res, error.message)
    }
  }
})

router.post('/trim', async (req, res) => {
  const { path, cuts } = req.body

  try {
    // the result should be the new path of the merged video
    const resultTrim = await videoController.trim(path, cuts)
    res.status(200)
    res.json({
      statusCode: 200,
      trimPath: resultTrim
    })
  } catch (error) {
    return new ContentError(error.message)
  }
})

router.post('/concat', async (req, res) => {
  const { path } = req.body

  try {
    // the result should be the new path of the merged video
    const resultConcat = await videoController.concat(path)
    res.status(200)
    res.json({
      statusCode: 200,
      mergedPath: resultConcat
    })
  } catch (error) {
    return new ContentError(error.message)
  }
})

export default router
