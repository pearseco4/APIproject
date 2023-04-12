import mongoose from "mongoose";
const Schema = mongoose.Schema;; 

let artworkSchema = new Schema ({
    id: { type: Number },
    title: { type: String },
    date_display: { type: String },
    artist_display: { type: String },
})

export default mongoose.model("artworks", artworkSchema);