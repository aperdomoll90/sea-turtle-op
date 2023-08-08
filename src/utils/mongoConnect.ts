import { MongoClient } from 'mongodb'

const mongoClient = new MongoClient(process.env.MONGO_URI as string)
const db = mongoClient.db('sea-op-db')

export default db
