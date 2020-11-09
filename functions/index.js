const functions = require('firebase-functions')
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp()
require('dotenv').config()

const { SENDER_EMAIL, SENDER_PASSWORD } = process.env;

exports.sendEmailNotification = functions.firestore.document('contacts/{id}')
  .onCreate((snap, ctx) => {
    const data = snap.data();
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 456,
      secure: true,
      auth: {
        user: SENDER_EMAIL,
        pass: SENDER_PASSWORD
      }
    })
    transporter.sendMail({
      from: SENDER_EMAIL,
      to: `${data.email}`,
      bcc: SENDER_EMAIL,
      subject: `Work with Kelly Gowing`,
      html: `
      <h2>Hello ${data.name}!</h2>
      <br>
      <p> Thanks for your message! I will get back to you at ${data.email} as soon as I can. In the meantime, If you have any updates on your project you can reply to this email.</p>
      <br>
      <p>---</p>
      <h3>Your message:</h3>
      <p>${data.message}</p>
      <p>---</p>
      <br>
      <p>I look forward to working with you!</p>
      <br>
      <p>Kelly Gowing</p>
      `,
    }).then(res => console.log('successfully sent that mail')).catch(err => console.log(err));

  });