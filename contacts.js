const contactsOperations = require("./db");
const chalk = require("chalk");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const contactsPath = "db/contacts.json";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactList = await contactsOperations.list();
      console.table(contactList);
      break;

    case "get":
      const getContactById = await contactsOperations.get(id);
      console.log(chalk.green("Add new contact"));
      console.log(getContactById);
      break;

    case "add":
      const addContact = await contactsOperations.add(getNewContacts);
      console.log(addContact);
      console.table(contactList);
      break;

    case "remove":
      const removeContacts = await contactsOperations.remove(id);
      console.log(removeContacts);
      break;

    default:
      console.warn(chalk.red("Unknown action type!"));
  }
}

// const id = 1;

// const getNewContacts = {
//   name: "Mango",
//   email: "mango@gmail.com",
//   phone: "322-22-22",
// };

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id });
// invokeAction({ action: "add", getNewContacts });
// invokeAction({ action: "remove", id });
invokeAction(argv);

//______________________________________________

// const fs = require("fs").promises;
// const filePath = "db/contacts.json";

// const fileList = async (filePath, action) => {
//   switch (action) {
//     case "read":
//       const text = await fs.readFile(filePath, "utf-8");
//       console.log(text);
//       break;

//     default:
//       throw new Error("Unknown action");
//   }
// };

// fileList(filePath, "read");
