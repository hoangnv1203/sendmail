import express from 'express'
import morgan from 'morgan'
import config from './config/config'
import mongoose from 'mongoose'
import api from 'modules/api'
import web from 'modules/web'
import path from 'path'
import bodyParser from 'body-parser'

const system = express()

// system.use(morgan('dev'))
system.set('view engine', 'pug')
system.set('views', './views')
system.use(express.static(path.join(__dirname, '/views/public')))
system.use(bodyParser.urlencoded({
  extended: false
}))
system.use(bodyParser.json())

system.use('/api', api)
system.use('/', web)

system.listen(config.serverPort, () => console.log(`Server listen to :${config.serverPort}`))
