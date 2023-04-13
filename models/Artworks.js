import mongoose from "mongoose";
const Schema = mongoose.Schema;; 

let artworkSchema = new Schema ({
    title: { type: String },
    date_display: { type: String },
    artist: { type: String },
    img: { type: String }
})

export default mongoose.model("artworks", artworkSchema);