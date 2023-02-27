const nodemailer = require('nodemailer')
const {google} = require('googleapis')

const CLIENT_ID = '821063320387-7iouci721vnbt3d4p5ou7k2lhi30679i.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04rFgnK5gs2lbCgYIARAAGAQSNwF-L9IrDYWHaPHxIGKVx-vUuS03Si0MW0q0HA0O0j_C9ppwTYwKMwJZSYBWhz-WgueR8hqFYx8'

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})
const ACCESS_TOKEN = await oAuth2Client.getAccessToken()
export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'alexleeyt8888@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: ACCESS_TOKEN
    },
})

export const mailOptions = {
    from:'alexleeyt8888@gmail.com',
    to: 'alexleeyt8888@gmail.com',
};


 


