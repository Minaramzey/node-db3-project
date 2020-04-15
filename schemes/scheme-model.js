const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  getSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function getSteps() {
  return db("steps");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps(id) {
    return db("steps").where("scheme_id", id);
  }

function add(newScheme) {
  return db("schemes")
  .insert(newScheme);
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}