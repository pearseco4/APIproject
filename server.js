import express from "express";
import cors from "cors";
import logger from "morgan";
import artworksRoute from "./routes/artworks.js";


//create express application
const app  = express()
const PORT = process.env.PORT || 3000

//set up middleware
app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use("/artworks", artworksRoute);

//
app.listen(PORT, () => {
process.env.NODE_ENV === "production" ? console.log(`Express server running in production on port ${PORT}\n\n`) : console.log(`Express server running in development on: ${PORT}`)
})
