const list = require("./list");
const updateContacts = require("./updateContacts");
const crypto = require("crypto");

const add = async (getNewContacts) => {
  const contacts = await list();
  const newContact = { id: crypto.randomUUID(), ...getNewContacts };
  contacts.push(newContact);

  await updateContacts(contacts);

  return newContact;
};

module.exports = add;
