import {
  sendMail
} from '../controllers/mail'

export default app => {
  app.get('/sendmail', sendMail)
}
