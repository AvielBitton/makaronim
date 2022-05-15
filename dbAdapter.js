var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


const insertDB = function(err, db) {
    if (err) throw err;
    var dbo = db.db("makronim");
    var myobj = { name: "green", price: 40 };
    dbo.collection("prodoct").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  }



  const findDoc = function(err, db) {
    if (err) throw err;
    var dbo = db.db("makronim");
    dbo.collection("prodoct").findOne({name:"yellow"}, function(err, result) {
      if (err) throw err;
      console.log(result.price);
      db.close();
    });
  }
//MongoClient.connect(url, insertDB );
MongoClient.connect(url,findDoc ); 
