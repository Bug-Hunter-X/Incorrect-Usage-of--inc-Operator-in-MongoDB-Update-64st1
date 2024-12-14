```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("653138c6a0a1566f530f6666")}, {"$inc": {"field": "1"}});
```