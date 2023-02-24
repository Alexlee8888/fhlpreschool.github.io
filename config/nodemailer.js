import nodemailer from 'nodemailer'

// const email = process.env.EMAIL;
// const pass = process.env.EMAIL_PASS;

const {EMAIL, EMAIL_PASS} = require('../env.js')

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL,
        pass: EMAIL_PASS,
    },
})

export const mailOptions = {
    from:EMAIL,
    to: EMAIL,

}
