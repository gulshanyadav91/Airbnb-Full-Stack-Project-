const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

//setUp for the ejs 
const path = require("path");
app.set("view engine" , "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));



//this is the basic setUp for the MONGODB 
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
// app.get("/testListing",async (req,res)=>{
//     let sampleList = new Listing({
//         title:"My new Villa",
//         description:"By the Beach",
//         price : 1200,
//         location:"Mau  (275101)",
//         country:"India",
//     });
 
//     await sampleList.save();
//     console.log("Sample is saved to the Db");
//     res.send("Succesfully data is inserted into the Db");


// })

//index route where we send the particular detail of the every user with the help of the
//  find method and then render it in the index page of the listings folder and we will get the it from listing/:id route
app.get("/listings", async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
})

//create new listings
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
})

// taking the value from the form and saving it into the database and redirecting back to the home page
//and it is basically Create Route and having the post request
app.post("/listings", async (req,res)=>{
    const newListing = await new Listing(req.body.listing);
    newListing.save();
    res.redirect("/listings");

})

//Show route 
app.get("/listings/:id", async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
})

//Edit route  this is used to edit the details of a particular user and it has the get request and it will show us the form which we have created in the edit.ejs file
//it is present inside the listings folder inside the edit.ejs file
app.get("/listings/:id/edit",async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
})

// update rout which is used to update the details of a particular user and it has the put request and 
// it will take the values from the edit.ejs file and save it into the database
app.put("/listings/:id",async (req,res)=>{
    let {id} = req.params;
   await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect( `/listings/${id}`);
})

//delete route which is used to delete the details of a particular user and it has the delete request and 
//and it will delete the details of a particular user and redirect to the home page

app.delete("/listings/:id",async (req,res)=>{
    let {id} = req.params;
   let x= await Listing.findByIdAndDelete(id);
//    console.log(x);
   res.redirect("/listings");
})

app.get("/",(req,res)=>{
    res.send("this is the root route");
})
app.listen(8080,()=>{
    console.log("app is listening via port 8080");
})