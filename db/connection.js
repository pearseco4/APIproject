import mongoose from "mongoose"
import chalk from "chalk"


const MONGODB_URI = process.env.PROD_MONGODB || 'mongodb://127.0.0.1:27017/chicagoArt-api'

//this is for model.findByIdAndUpdate method, specifically so that {new: true} is the defualt
mongoose.set('returnOriginal', false)


//connection event: alerting for error
mongoose.connect(MONGODB_URI).catch((error) =>
    console.log("Error connecting to MonogoDB", error.message)
);

//connection event: disconnected alert 
mongoose.connection.on("disconnected", () => 
    console.log(chalk.bold("Disconnected from MongoDB!"))
); 

//connection event: connection error 
mongoose.connection.on("error", (error) => console.error(chalk.red(`MongoDB connection error: ${error}`))
);



export default mongoose;