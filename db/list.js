const fs = require("fs/promises");
const contactsPath = require("./contacstPath");

const list = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

module.exports = list;
