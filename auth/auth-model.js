const db = require("../database/dbConfig");

module.exports = {
  insert,
  getUsers,
  getBy
};

function insert(user) {
  return db("users").insert(user, "id");
}

function getUsers() {
  return db("users");
}

function getBy(filter) {
  return db("users").where(filter);
}
