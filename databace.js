const { MongoClient } = require("mongodb");

const URI = "mongodb+srv://vnsdev:9QwKCizLP70sOsDY@vnsdev.ljpqsj6.mongodb.net/";


const client = new MongoClient(URI);

const dbName = 'DDS';

async function main(){
    await client.connect();
    const db = client.db(dbName);;
    const collection = db.collection('users');

    const Data1 = {
        fName : 'devesh',
        lName : 'Singh',
        address : 'U.P'
    }

 const insertData = await collection.insertMany([Data1]);

 console.log('first Data---->'+ insertData);

 const viewData = await collection.find({}).toArray();
console.log("view all data -->", viewData);

const countData = await collection.countDocuments({});
console.log('view all data --->',countData);

// const deleteData = await collection.deleteMany({fName:'devesh'});
// console.log("delete data -->",deleteData);

const viewFi = await collection.find({}).toArray();
console.log("final data ---->",viewFi);
    return 'done'
}

main().then(console.log).catch(console.error).finally(()=>client.close());