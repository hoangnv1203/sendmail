import AWS from 'aws-sdk'
import bluebird from 'bluebird'
import config from 'config/config'

AWS.config.setPromisesDependency(bluebird)
AWS.config.update({
  region: config.aws.region,
  accessKeyId: config.aws.credentials.accessKeyId,
  secretAccessKey: config.aws.credentials.secretAccessKey
})

export default AWS
