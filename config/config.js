import config from 'recursive-config'

export default config.load({
  defaults: {
    aws: {
      region: 'us-east-1',
      credentials: {
        accessKeyId: 'xxx',
        secretAccessKey: 'xxx',
        sourceMailAws: 'xxx'
      }
    },
    emails: [
      // 'hoangnv668@gmail.com',
      'hoang.nong.nv@gmail.com',
    ]
  }
})
