class EmailService {
    sendEmail = (user, token) => {
        console.log(`[EmailService.sendEmail] to log in as ${user.email} go to http://localhost:3000/auth/${token}`)
    }
}

const EmailServiceSingleTon = new EmailService();

export default EmailServiceSingleTon;