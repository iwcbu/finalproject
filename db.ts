import { Collection, Db, MongoClient } from "mongodb";

const MONGO_URI = "mongodb+srv://iwc3:mkvdKAW5vMCEGV81@cs-392-disc.5jrfzpq.mongodb.net/?retryWrites=true&w=majority&appName=CS-392-disc"

//const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error("MONGO_ORI environment variable is undefined");
}

 console.log(MONGO_URI)

const DB_NAME = "market-scouters-profiles";
export const ENTRIES_COLLECTION = "entries-collection";

let client: MongoClient | null = null;
let db: Db | null = null;

async function connect(): Promise<Db> {
    if (!client) {
        client = new MongoClient(MONGO_URI);
        await client.connect();
    }
    return client.db(DB_NAME);
}

export default async function getCollection(
    collectionName: string,
): Promise<Collection> {
    if (!db) {
        db = await connect();
    }
    
    return db.collection(collectionName);
}