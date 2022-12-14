import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

let connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.jdtedzg.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;
        if (!email || !name || !message) {
            return res.status(422).json({
                message: "Invalid input"
            })
        }
        const newMessage: any = { email, name, message }
        const client = await MongoClient.connect(connectionString)
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