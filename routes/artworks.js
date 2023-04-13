  import { Router } from "express";
  import { getArtwork,getArtworks, createArtwork, updateArtwork, deleteArtwork,getArtist } from "../controllers/artworks.js";
  
  const router = Router();

  router.get("/", getArtworks);
  router.get("/:title", getArtwork);
  router.get("/name/:name", getArtist)
  router.post("/", createArtwork); 
  router.put("/:title", updateArtwork); 
  router.delete("/:title", deleteArtwork); 

  export default router;
