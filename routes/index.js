//import portion of router
import {Router} from "express";
import artworksRoute from "./artworks.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use('/artworks', artworksRoute);

export default router;