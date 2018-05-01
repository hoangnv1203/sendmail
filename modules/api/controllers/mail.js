import { send } from 'services/mail'
import config from 'config/config'

export function sendMail(req, res, next) {

  config.emails.forEach((email) => {
    let index = email.indexOf('@')
    let name = email.substring(0, index)

    handleSendMail(name, email)
  })

  res.send('success')
}

function handleSendMail(name, email) {
  let subject = "Invest smarter with ICObench"
  let toAddresses = [email]
  let ccAddresses = []
  let textFormatBody = "textFormatBody"

  let htmlFormatBody = `<table bgcolor="#EEE" width="100%" style="font-family:arial,sans-serif;padding-bottom:50px" cellspacing="0" cellpadding="0" border="0">
    <tbody>
        <tr>
            <td>
                <table bgcolor="#ffffff" width="600" align="center" cellspacing="0" cellpadding="0" border="0" style="text-align:center">
                    <thead>
                    <tr>
                        <th>
                            <a style="font-size: 20px;display:inline-block;padding-top:50px">
                                ICObench
                            </a>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <p style="margin-bottom:0;padding-bottom:20px;color:#585862;line-height:27px;font-size:17px;padding-right:40px;padding-left:40px">
                                Invest smarter with ICObench, ICOs ratings from top investors and experts
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="http://google.com" style="display:inline-block" target="_blank">
                                <div style="outline:none;margin-bottom: 30px;font-size: 16px;color:#fff;border:0;background: #2db9ad;display:inline-block;height: 50px;min-width: 200px;line-height: 50px;text-align:center;padding-left:30px;padding-right:30px;">
                                    Register ICO
                                </div>
                            </a>
                        </td>
                    </tr>
                    </tbody>
                    <tfoot style="background:#f9f9f9">
                    <tr>
                        <td>
                        aaaaa
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="http://google.com" style="display:inline-block" target="_blank">
                                <div style="outline:none;margin-bottom: 30px; margin-top: 30px; font-size: 16px;color:#fff;border:0;background: #2db9ad;display:inline-block;height: 50px;min-width: 200px;line-height: 50px;text-align:center;padding-left:30px;padding-right:30px;">
                                    Register ICO
                                </div>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="font-size:12px;color:#404041;padding-bottom:20px;margin:0">© 2018 ICObench</p>
                        </td>
                    </tr>
                    </tfoot>
                </table>
            </td>
        </tr>
    </tbody>
</table>`

  send(subject, toAddresses, ccAddresses, htmlFormatBody, textFormatBody)
}
