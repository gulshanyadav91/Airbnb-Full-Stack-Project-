const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String
    },
    description:String,
    image : {
        // type:String,
        // default:"https://www.istockphoto.com/photo/beautiful-blonde-girl-walking-with-retro-bikes-in-sunny-nice-day-wearing-vintage-gm1094087810-293638981?utm_campaign=adp_photos_sponsored&utm_content=https%3A%2F%2Funsplash.com%2Fphotos%2Fcouple-hugs-next-to-bicycles-under-blooming-trees-CblP-GlNFUA&utm_medium=affiliate&utm_source=unsplash&utm_term=cherry+blossom%3A%3A%3A",
        // set: (v)=> v===""?"https://www.istockphoto.com/photo/beautiful-blonde-girl-walking-with-retro-bikes-in-sunny-nice-day-wearing-vintage-gm1094087810-293638981?utm_campaign=adp_photos_sponsored&utm_content=https%3A%2F%2Funsplash.com%2Fphotos%2Fcouple-hugs-next-to-bicycles-under-blooming-trees-CblP-GlNFUA&utm_medium=affiliate&utm_source=unsplash&utm_term=cherry+blossom%3A%3A%3A":v,


        filename:String,
        url:String,

    },
    price : Number,
    location : String,
    country : String
});
const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;