const Create = (res, message, data = '') => {
  res.status(201)
  res.json({
    data: data,
    error_code: null,
    message,
    success: true
  })
}

export { Create }
