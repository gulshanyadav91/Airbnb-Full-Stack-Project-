const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderLust"

main()
    .then(()=>{
        console.log("connected to the mongoDb");
    })
    .catch((err)=>{
        console.log(err);
    });

async function main(params) {
    await mongoose.connect(MONGO_URL);
}

const initDb = async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Db is initialized");
};

initDb();