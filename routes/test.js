const router = require('express').Router();
const passport = require('../middleware/session/passport-local');



const MongoClient = require('mongodb').MongoClient;
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'myproject';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
  var dbo = client.db(dbName);
  dbo.createCollection('customers', function(err, res){
  	console.log('collection is created');
  });
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj);

  dbo.collection("customers").findOne({}, function(err,result){
  	console.log(result);
  });
  client.close();
});

router.get('/test', function(req,res){
	res.sendfile('test.html', {root: __dirname+'/../views'});
});

router.post('/test', passport.authenticate('local', {
	successRedirect: '/test',
	failureRedirect: '/'
}));
module.exports =  router;