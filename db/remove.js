const fs = require("fs/promises");
const list = require("./list");
const updateContacts = require("./updateContacts");
const contactsPath = require("./contacstPath");
const crypto = require("crypto");

const remove = async (id) => {
  const contacts = await list();
  const idx = contacts.findIndex((item) => item.id === parseInt(id));
  if (idx === -1) {
    return null;
  }
  const removeContacts = contacts.splice(idx, 1);
  //   const contactsString = JSON.stringify(contacts);
  await updateContacts(contacts);
  return removeContacts;
};

module.exports = remove;
