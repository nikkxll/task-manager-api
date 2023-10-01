const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dmitr.nikiforov@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}! Let me know how you get along with the app!`
    })
}

const sendByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dmitr.nikiforov@gmail.com',
        subject: 'Thanks for being with us!',
        text: `Thank you for being with us, ${name}! Very sad to see you leaving, but I wish you all of the best!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendByeEmail
}