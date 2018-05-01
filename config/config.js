import config from 'recursive-config'

export default config.load({
  defaults: {
    aws: {
      region: 'us-east-1',
      credentials: {
        accessKeyId: 'AKIAIAZ5RZKF34JLGNSQ',
        secretAccessKey: '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',
        sourceMailAws: 'hoang.nong.nv@gmail.com'
      }
    },
    emails: [
      'hoang.nong.nv@gmail.com'
    ]
  }
})
