import express from 'express'

const app = express()

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Dashboard',
    pathToAssets: '/bootstrap',
    pathToSelectedTemplateWithinBootstrap: '/bootstrap/docs/examples/'
  })
})

app.post('/sendmail', function(req, res) {
  console.log('req', req.body)

  res.redirect('/')
})

export default app
