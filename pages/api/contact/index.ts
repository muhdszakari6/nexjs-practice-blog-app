import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;
        if (!email || !name || !message) {
            return res.status(422).json({
                message: "Invalid input"
            })
        }
        const newMessage: any = { email, name, message }
        const client = await MongoClient.connect('mongodb+srv://salim:salim@cluster0.jdtedzg.mongodb.net/udemy-blog?retryWrites=true&w=majority')
        const db = client.db()
        try {
            const res = await db.collection('messages').insertOne(newMessage)
            newMessage.id = res.insertedId
        } catch (error) {
            client.close()
            return res.status(500).json({ message: 'Something went wrong' })
        }
        client.close()
        return res.status(201).json({ message: "Success", data: { ...newMessage, } })
    }

}

export default handler