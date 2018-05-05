import { send } from 'services/mail'
import config from 'config/config'

export function sendMail(req, res, next) {
    let { subject, content, from, to, refferUrl } = req.body

    if (!subject || !content) {
        return res.status(400).json({error: 'Missing params'})
    }

    let emails = config.emails;

    theLoop(emails[0], subject, content, refferUrl, emails, 0);

    res.redirect('/')
}

function theLoop(email, subject, content, refferUrl, emails, i) {
    setTimeout(function() {
        if (email) {
            handleSendMail(email, subject, content, refferUrl)
        }

        if (i < emails.length) {
            i++;
            theLoop(emails[i], subject, content, refferUrl, emails, i);
        }
    }, 100);
}

function handleSendMail(email, subject, content, refferUrl) {
  // let subject = "Invest smarter with ICObench"
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
                            <a style="font-size: 20px;display:inline-block;padding-top:35px; padding-bottom:10px">
                                ICOTOP BOUNTY & AIRDROP
                            </a>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    </tr>
                    <tr>
                        <td>
                            <a href="${refferUrl}" style="display:inline-block" target="_blank">
                                <div style="outline:none;margin-bottom: 10px;font-size: 16px;color:#fff;border:0;background: #2db9ad;display:inline-block;height: 30px;min-width: 200px;line-height: 30px;text-align:center;padding-left:30px;padding-right:30px;">
                                    View Website
                                </div>
                            </a>
                        </td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td style="text-align:left; padding-left: 20px;">
                        ${content}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="${refferUrl}" style="display:inline-block" target="_blank">
                                <div style="outline:none;margin-bottom: 10px; margin-top: 10px; font-size: 16px;color:#fff;border:0;background: #2db9ad;display:inline-block;height: 30px;min-width: 200px;line-height: 30px;text-align:center;padding-left:30px;padding-right:30px;">
                                    View Website
                                </div>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="font-size:12px;color:#404041;padding-bottom:20px;margin:0">© 2018 ICOTOP</p>
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
