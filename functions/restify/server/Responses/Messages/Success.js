const Success = (headers, data) => {
  return {
    statusCode: 200,
    // headers,
    body: JSON.stringify({
      data,
      error_code: null,
      message: 'OK',
      success: true
    })
  }
}

export { Success }
