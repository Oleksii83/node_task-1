const list = require("./list");
const updateContacts = require("./updateContacts");
const crypto = require("crypto");

const add = async (name, email, phone) => {
  const contacts = await list();
  const newContact = { id: crypto.randomUUID(), name, email, phone };
  contacts.push(newContact);

  await updateContacts(contacts);

  return newContact;
};

module.exports = add;
