const fs = require("fs/promises");
const contactsPath = require("./contacstPath");

const updateContacts = async (getNewContacts) => {
  const contactsStr = JSON.stringify(getNewContacts);
  await fs.writeFile(contactsPath, contactsStr);
};

module.exports = updateContacts;
