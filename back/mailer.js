const express = require('express');
const ejs = require('ejs');
const nodeMailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

// Email Generator
// props is an object with variables: name,mail,items,to,subject

let render;
let template;

// Form Data Handling
function mailer(type, props) {
  switch (type) {
    case 'checkout':
      template = fs.readFileSync(path.join(__dirname, '/public/Templates/userPurchase.ejs'), ('utf-8'));
      render = ejs.render(template, {
        name: props.name,
        // Array of purchased items
        items: props.items,
      });
      break;

    case 'register':
      template = fs.readFileSync(path.join(__dirname, '/public/Templates/userRegister.ejs'), ('utf-8'));
      render = ejs.render(template, {
        name: props.name,
        mail: props.mail,
      });

      break;

    default:
  }

  // Connects to the channel trough which the mail will be sent.
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'titans.bookstore.noreply@gmail.com',
      pass: 'ramirojuan5',
    },
  });

  // The email data will be taken from the body sent from the front and parsed.
  const mailOptions = {
    from: '"Bookstore" <xx@titans.com>', // sender address (what the receiver sees)
    to: props.mail, // list of receivers
    subject: props.subject, // Subject line
    html: render,
  };

  // Final Status Report
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
}

module.exports = mailer;
