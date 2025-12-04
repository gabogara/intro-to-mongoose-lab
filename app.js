const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const prompt = require("prompt-sync")();

const Customer = require("./models/customer");

const username = prompt("What is your name? ");

console.log(`Your name is ${username}`);

const connect = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect();
  console.log("Disconnected from MongoDB");

  // Close our app, bringing us back to the command line.
  process.exit();
};

connect();
