const fs = require("fs/promises");
const contactsPath = require("./contacstPath");

// const path = require("path");
// const contactsPath = path.join(__dirname, "contacts.json");

// console.log(__dirname);
// console.log(contactsPath);

const list = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

module.exports = list;
