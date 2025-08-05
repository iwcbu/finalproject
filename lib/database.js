//Code from MongoDB Website for quick starting DB

const { MongoClient, ServerApiVersion } = require('mongodb');

const user = process.env.USERNAME;
const pass = process.env.MONGODB_PASS
const uri = "mongodb+srv://<db_username>:<db_password>@cs-392-disc.5jrfzpq.mongodb.net/?retryWrites=true&w=majority&appName=CS-392-disc";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

