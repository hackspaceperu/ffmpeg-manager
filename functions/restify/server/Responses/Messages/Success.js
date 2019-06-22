const Success = (res, data) => {
  res.status(200)
  res.json({
    statusCode: 200,
    body: {
      data,
      error_code: null,
      message: 'OK',
      success: true
    }
  })
}

export { Success }
