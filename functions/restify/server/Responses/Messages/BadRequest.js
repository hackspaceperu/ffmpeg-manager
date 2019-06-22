//The request was invalid.
// pending to add headers
const BadRequest = (code = 0) => {
  return {
    statusCode: 400,
    // headers,
    body: JSON.stringify({
      data: null,
      error_code: code,
      message: 'La consulta fue inválida',
      success: false
    })
  }
}

export { BadRequest }
