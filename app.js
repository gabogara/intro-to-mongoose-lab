const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const prompt = require("prompt-sync")();

const Customer = require("./models/customer");

const createCustomer = async (nameCustumer, ageCustumer) => {
  const customerData = {
    name: nameCustumer,
    age: ageCustumer,
  };
  const customer = await Customer.create(customerData);
  console.log("New customer: ", customer);
};

const findCustomer = async () => {
  const customer = await Customer.find({});
  console.log("All todos:", customer);
};

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
        const name = prompt("Customer name: ");
        const ageInput = prompt("Customer age: ");
        const age = Number(ageInput);
        await createCustomer(name, age);
        break;
      case "2":
        await findCustomer();
        break;
      case "3":
        await updateCustomer();
        break;
      case "4":
        await deleteCustomer();
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
