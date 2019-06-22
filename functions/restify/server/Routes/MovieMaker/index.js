// declaring variables for server
const RR = require('restify-router')
const router = new RR.Router()
const movieController = MovieController() ;

// routes
router.post("/merge", async (req, res) => {
    // get paths from req.body
    // modify to array
    const arrPaths = req.body;

    arrPaths.map( destPaths => {
        // check paths ?

        // send paths to controller
        try {
            // the result should be the new path of the merged video       
            const resultMerge = await videoController.merge(destPaths)
            res.status(200);
            res.json({
                statusCode: 200,
                mergedPath: resultMerge  
            })
        } catch (error) {
            return new ContentError(error.message)
        }
    })

    
})

router.post("/trim", async (req, res) => {
    // function trim

    // get data from body
    const { path, cuts } = req.body;

    try {
        // the result should be the new path of the merged video       
        const resultTrim = await videoController.trim(path, cuts);
        res.status(200);
        res.json({
            statusCode: 200,
            trimPath: resultTrim  
        })
    } catch (error) {
        return new ContentError(error.message)
    }
})

router.post("/clip", async (req, res) => {
    // fcuntion clip or cut

    const { path, duration, position } = req.body;

    try {
        // the result should be the new path of the merged video       
        const resultClip = await videoController.clip(path, duration, position);
        res.status(200);
        res.json({
            statusCode: 200,
            clipPath: resultClip  
        })
    } catch (error) {
        return new ContentError(error.message)
    }
})

router.post("/concat", async (req, res) => {
    // function concat

    const { path } = req.body;

    try {
        // the result should be the new path of the merged video       
        const resultConcat = await videoController.concat(path);
        res.status(200);
        res.json({
            statusCode: 200,
            mergedPath: resultConcat  
        })
    } catch (error) {
        return new ContentError(error.message)
    }
})


export default router;