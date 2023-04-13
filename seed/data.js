import Artworks from "../models/Artworks.js";
import artworks from "../db/artworks.json" assert {type: "json"};

const insertData = async () => {
    //reset database 
    await Artworks.deleteMany();

    //insert Artworks into database
    await Artworks.insertMany(artworks);

};

insertData()