import nodemailer from 'nodemailer'

interface Mail {
    email: string
    message: string
}

const sendEmail = async ({ email, message }: Mail) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.GOOGLE_USER,
            pass: process.env.GOOGLE_PASS
        }
    })

    const sendingEmail = {
        from: `${email}`,
        to: process.env.ADMIN_USER,
        subject: 'White Fabric',
        text: message
    }

    await transporter.sendMail(sendingEmail)

    return { message: "I've got your mail" }
}

export default sendEmail
