import db from "./db/connection.js";
// import routes from "./routes/index.js";
import express from "express";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";

//create express application
const app  = express()
const PORT = process.env.PORT || 3000

//set up middleware
app.use(express.json());
app.use(cors());
app.use(logger("dev"));
// app.use("/", routes);

//listen for connected event
db.on('Connected', () => {
    console.clear()
    console.log(chalk.blue("Connected to MongoDB!"))

    app.listen(PORT, () => {
        process.env.NODE_ENV === "production" ? console.log(`Express server running in production on port ${PORT}\n\n`) : console.log(`Express server running in development on: ${PORT}`)
    })
})