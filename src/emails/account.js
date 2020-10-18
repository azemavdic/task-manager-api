const sgMail = require ('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'asko2212@hotmail.com',
        subject: 'Hvala vam na povjerenju!',
        text: `Dobrodošli na novu aplikaciju, ${name}. Za sva dodatna pitanja slobodno se obratite.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send ({
        to: email,
        from: 'asko2212@hotmail.com',
        subject: 'Otkazujete pretplatu na našu aplikaciju?',
        text: `Poštovani ${name}, 
        Možete li nam reći razlog vašeg prestanka korištenja aplikacije?
        Za sva dodatna pitanja slobodno se obratite.`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}