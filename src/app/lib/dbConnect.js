import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default async function dbConnect() {
  try {
    await client.connect();
    return client;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
