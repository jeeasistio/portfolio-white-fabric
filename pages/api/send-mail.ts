import { NextApiRequest, NextApiResponse } from 'next'
import sendEmail from '../../lib/sendMail'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const mailResponse = await sendEmail(req.body)

        res.status(200).json(mailResponse)
    } catch (err) {
        res.status(400).json(err)
    }
}
