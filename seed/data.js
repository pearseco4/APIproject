import db from "../db/connection.js"
import Artworks from "../models/Artworks.js";
import artworks from "../db/artworks.json" assert {type: "json"};

const insertData = async () => {
    //reset database 
    await db.dropDatabase();

    //insert Artworks into database
    await Artworks.insertMany(artworks);

    // Close DB Connection
    db.close()
};

insertData()