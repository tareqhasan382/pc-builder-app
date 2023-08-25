const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    const pcCollection = client.db("pc-collection").collection("products");

    if (req.method === "GET") {
      const products = await pcCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: products });
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
export default run;
