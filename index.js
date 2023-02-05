const index = require("./index.json");
const dwarven = require("./dwarven.json");
const elven = require("./elven.json");
const calls = require("./calls.json");

module.exports = {
  ...index,
  tableData: {
    dwarven,
    elven,
  },
  call,
};
