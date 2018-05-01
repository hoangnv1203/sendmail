import AWS from 'config/aws'
import config from 'config/config';

export const send = async (subject, toAddresses, ccAddresses, htmlFormatBody, textFormatBody) => {
    const ses = new AWS.SES({apiVersion: '2010-12-01'})

    const params = {
        Destination: { // required
            CcAddresses: ccAddresses,
            ToAddresses: toAddresses
        },
        Message: { // required
            Body: { // required
                Html: {
                    Charset: "UTF-8",
                    Data: htmlFormatBody
                },
                Text: {
                    Charset: "UTF-8",
                    Data: textFormatBody
                    }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: subject
            }
        },
        Source: config.aws.credentials.sourceMailAws, // required
        ReplyToAddresses: [],
    }

    return await ses.sendEmail(params).promise()
}
