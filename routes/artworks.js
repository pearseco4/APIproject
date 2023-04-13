  import { Router } from "express";
  import * as controller from "../controllers/artworks.js";
  
  const router = Router();

  router.get("/", controller.getCharacters);
  router.get("/:id", controller.getCharacter);
  router.post("/", controller.createCharacters); 
  router.put("/:id", controller.createCharacter); 
  router.delete("/:id", controller.createCharacter); 

  export default router;
