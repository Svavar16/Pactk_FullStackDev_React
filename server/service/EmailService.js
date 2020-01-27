class EmailService {
    sendEmail = (user, token) => {
        console.log(`[EmailService.sendEmail] The token is: ${token}`)
    }
}

const EmailServiceSingleTon = new EmailService();

export default EmailServiceSingleTon;