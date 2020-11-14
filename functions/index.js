const functions = require('firebase-functions')
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const { google } = require('googleapis')
admin.initializeApp()
require('dotenv').config()

const { SENDER_EMAIL, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN} = process.env;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

exports.sendEmailNotification = functions.firestore.document('contacts/{id}')
  .onCreate((snap, ctx) => {
    const data = snap.data();

    async function sendMail() {
      try {
        const accessToken = await oAuth2Client.getAccessToken()

        const transport = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            type: 'OAuth2',
            user: SENDER_EMAIL,
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: accessToken
          }
        })
        const mailOptions = {
          from: SENDER_EMAIL,
          to: `${data.email}`,
          bcc: SENDER_EMAIL,
          subject: `Work with Kelly Gowing`,
          text: `Hello ${data.name}! Your message has been recieved! I will get back to you at ${data.email} as soon as I can. In the meantime, if you have any updates to your message you can reply directly to this email. I look forward to working with you. - Kelly`,
          html: `
          <h2>Hello ${data.name}!</h2>
          <br>
          <p> Your message has been recieved! I will get back to you at ${data.email} as soon as I can. In the meantime, if you have any updates to your message you can reply directly to this email.</p>
          <br>
          <h3>Your message:</h3>
          <p>---</p>
          <p>${data.message}</p>
          <p>---</p>
          <br>
          <p>I look forward to working with you!</p>
          <br>
          <p>- Kelly</p>
          `,
        }

        const result = await transport.sendMail(mailOptions)
        return result

      } catch (error) {
        return error
      }
    }

    sendMail().then(result => console.log('successfully sent email', result)).catch(error => console.log(error.message));
  });