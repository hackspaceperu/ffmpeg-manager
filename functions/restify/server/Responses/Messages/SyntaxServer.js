const SyntaxServerError = (message = '', code = 5) => {
  return {
    statusCode: 500,
    body: JSON.stringify({
      data: null,
      error_code: code,
      message: message || 'Syntax Server error',
      success: false
    })
  }
}

export { SyntaxServerError }
