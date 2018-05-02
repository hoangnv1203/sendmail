import express from 'express'
import {
  sendMail
} from '../api/controllers/mail'

const app = express()

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Dashboard',
    pathToAssets: '/bootstrap',
    pathToSelectedTemplateWithinBootstrap: '/bootstrap/docs/examples/'
  })
})

app.post('/sendmail', sendMail)

export default app
