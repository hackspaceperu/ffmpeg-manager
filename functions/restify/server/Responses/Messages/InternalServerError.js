const InternalServerError = (message = '', code = 5) => {
  return {
    statusCode: 500,
    //   headers,
    body: JSON.stringify({
      data: null,
      error_code: code,
      message: message || 'Internal server error',
      success: false
    })
  }
}

export { InternalServerError }
