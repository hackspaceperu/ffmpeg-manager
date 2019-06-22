  
const aws = require('aws-sdk');
  
aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  })
  
  const s3 = new aws.S3()
  
  export {
    s3
  }
  