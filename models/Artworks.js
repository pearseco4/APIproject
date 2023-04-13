import mongoose from "../db/connection.js";
const Schema = mongoose.Schema;; 

let artworkSchema = new Schema ({
    title: { type: String },
    date_display: { type: String },
    artist: { type: String },
})

export default mongoose.model("artworks", artworkSchema);