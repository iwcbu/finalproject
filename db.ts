import { Collection, Db, MongoClient } from "mongodb";

// MongoDB connection string — replace with your actual URI or environment variable
const MONGO_URI = process.env.MONGOURI
// Alternative way to load from environment variables (recommended for security)
// const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    // Throw an error if no URI is set, to avoid silent failures
    throw new Error("MONGO_URI environment variable is undefined");
}

console.log(MONGO_URI);  // Log the URI (remove in production for security!)

const DB_NAME = "market-scouters-profiles";  // The name of the database to use
export const ENTRIES_COLLECTION = "entries-collection"; // Default collection name to export/use

// Variables to hold the MongoClient and Db instances to reuse connection
let client: MongoClient | null = null;
let db: Db | null = null;

// Connect to MongoDB and return the database instance
async function connect(): Promise<Db> {
    if (!client) {
        // Create a new MongoClient only if we don’t already have one
        client = new MongoClient(MONGO_URI);
        await client.connect();  // Connect to the MongoDB cluster
    }
    return client.db(DB_NAME);  // Return the specific database instance
}

// Exported function to get a collection by name from the connected database
export default async function getCollection(
    collectionName: string,
): Promise<Collection> {
    if (!db) {
        // Connect and cache the DB instance if not connected yet
        db = await connect();
    }
    
    // Return the requested collection object for CRUD operations
    return db.collection(collectionName);
}
