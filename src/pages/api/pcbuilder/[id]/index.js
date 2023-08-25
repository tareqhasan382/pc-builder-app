const { MongoClient, ServerApiVersion } = require("mongodb");
const { ObjectId } = require("mongodb");
const uri = process.env.MONGODB_URL;

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
      const { id } = req.query;
      const objectId = new ObjectId(id);
      const data = await pcCollection.findOne({ _id: objectId });
      res.send({ message: "success", status: 200, data: data });
    }
  } finally {
  }
}
export default run;
