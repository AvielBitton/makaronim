const { MongoClient } = require("mongodb");
// Connection URI
const uri = "mongodb://localhost:27017/"; // Create a new MongoClient
const client = new MongoClient(uri);


async function findMongoDoc(color) {
  //connect
  await client.connect();
  console.log("connect succsess");

  //check
  await client.db("admin").command({ ping: 1 });

  //find one - i built it
  const myResult = await client
    .db("makronim")
    .collection("prodoct")
    .findOne({ name: `${color}` });

  // close
  await client.close();

  return myResult;
}


exports.findColor = findMongoDoc;