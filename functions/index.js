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
      service:'gmail',
      host:'smtp.gmail.com',
      port:456,
      secure:true,
      auth: {
        user: SENDER_EMAIL,
        pass: SENDER_PASSWORD
      }
    }) 
    transporter.sendMail({
      from: SENDER_EMAIL,
      to: `${data.email}`,
      subject: 'Your submission Info',
      text: `${data.email}`,
      html: `${data.email}`,
    }).then(res => console.log('successfully sent that mail')).catch(err => console.log(err));

  });