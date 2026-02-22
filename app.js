const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const path = require("path");

// ----- Setup EJS -----
app.engine('ejs', ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// ----- MongoDB Connection -----
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.log("❌ MongoDB connection error:", err));

// ----- Routes -----

// Root route
app.get("/", (req, res) => {
    res.send("This is the root route");
});

// Index route
app.get("/listings", async (req, res) => {
    try {
        const allListings = await Listing.find({});
        res.render("listings/index.ejs", { allListings });
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

// New listing form
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

// Create listing
app.post("/listings", async (req, res) => {
    try {
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

// Show route
app.get("/listings/:id", async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);
        res.render("listings/show.ejs", { listing });
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

// Edit route
app.get("/listings/:id/edit", async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);
        res.render("listings/edit.ejs", { listing });
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

// Update route
app.put("/listings/:id", async (req, res) => {
    try {
        await Listing.findByIdAndUpdate(req.params.id, { ...req.body.listing });
        res.redirect(`/listings/${req.params.id}`);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

// Delete route
app.delete("/listings/:id", async (req, res) => {
    try {
        await Listing.findByIdAndDelete(req.params.id);
        res.redirect("/listings");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

// ----- Start Server -----
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
