const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const prompt = require("prompt-sync")();

const Customer = require("./models/customer");

const showMenu = async () => {
  let running = true;

  while (running) {
    console.log("\nWelcome to the CRM");
    console.log("What would you like to do?");
    console.log("1. Create a customer");
    console.log("2. View all customers");
    console.log("3. Update a customer");
    console.log("4. Delete a customer");
    console.log("5. Quit");

    const choice = prompt("Number of action to run: ");

    switch (choice) {
      case "1":
        console.log("opcion Crear");
        break;
      case "2":
        console.log("opcion update");
        break;
      case "3":
        console.log("opcion read");
        break;
      case "4":
        console.log("opcion delete");
        break;
      case "5":
        running = false;
        console.log("Goodbye!");
        break;
      default:
        console.log("Invalid choice, please try again.");
    }
  }
};

const main = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  await showMenu();
  await mongoose.disconnect();
  console.log("Disconnected from MongoDB");
  // Close our app, bringing us back to the command line.
  process.exit();
};

main();
