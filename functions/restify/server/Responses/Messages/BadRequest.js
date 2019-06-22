//The request was invalid.
// pending to add headers
const BadRequest = (res, message, code = 0) => {
  res.status(400)
  res.json({
    statusCode: 400,
    body: {
      data: null,
      error_code: code,
      message,
      success: false
    }
  })
}

export { BadRequest }
