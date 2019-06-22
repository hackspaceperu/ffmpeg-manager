//The requested resource was not found.
const NotFound = (res, message, code = 0) => {
  res.status(404)
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

export { NotFound }
