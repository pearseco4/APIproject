import Artworks from "../models/Artworks.js";

export const getArtworks = async (req, res) => {
  try {
    const artworks = await Artworks.find();
    res.json(artworks);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getArtwork = async (req, res) => {
  try {
    const { title } = req.params;

    const artworks = await Artworks.findOne( {"title":title} );
    res.json(artworks);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getArtist = async (req, res) => {
  try {
    const { name } = req.params;

    const artworks = await Artworks.find({"artist":name});
    res.json(artworks);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};


export const createArtwork = async (req, res) => {
  try {
    const artwork = new Artworks(req.body);
    await artwork.save();
    res.status(201).json(artwork);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateArtwork = async (req, res) => {
  try {
  const { title } = req.params;
  const artwork = await Artworks.findOneAndUpdate({"title":title}, req.body);
  res.status(200).json(artwork);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const deleteArtwork = async (req, res) => {
  try {
    const { title } = req.params;
    const deleted = await Artworks.findOneAndDelete({"title":title});

    if (deleted) {
      return res.status(200).send("Artwork Deleted!");
    }

    throw new Error("Artwork not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};