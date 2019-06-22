const RR = require('restify-router')
const router = new RR.Router()
const videoController;

router.post("/upload", (req, res) => {
    // get route from local device
    const {localPath} = req.body

    try {
        const videoPath = await videoController.upload(localPath)
        res.status(200);
        res.json({
          statusCode: 200,
          mergedPath: resultMerge  
        })
    } catch (error) {
        
    }
})

export default router;