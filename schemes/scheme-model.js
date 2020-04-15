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
//Also Works--- Just testing different ways
// function findSteps(scheme_id) {
//     return db("steps as s")
//       .join("schemes as sc", "s.scheme_id", "sc.id")
//       .select("s.instructions", "s.step_number")
//       .where({ scheme_id });
// }

function findSteps(id) {
    return db("steps")
    .where("scheme_id", id);
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