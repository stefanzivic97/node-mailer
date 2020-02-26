require('dotenv').config();
const nodemailer = require('nodemailer');

console.log(process.env.GMAIL_EMAIL);

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD
    }
});

const sendConfirmMail = (obj) => {
    transport.sendMail({
        to: obj.to ? obj.to : 'Prazan',
        from: obj.from ? obj.from : 'Prazan',
        subject: obj.subject ? obj.subject : 'Prazan',
        html: obj.html ? obj.html : `<h1> Prazan </h1>`
    })
}

sendConfirmMail({
    to: process.env.GMAIL_EMAIL,
    from: process.env.GMAIL_EMAIL,
    subject: 'Proba',
    html: `
        <h1>
            Poslato od sa ${process.env.GMAIL_EMAIL}
        </h1>
    `
});