const list = require("./list");

const get = async (id) => {
  const contacts = await list();
  const result = contacts.find((item) => item.id === parseInt(id));
  if (!result) {
    return null;
  }
  return result;
};

module.exports = get;
