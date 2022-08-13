const index = require("./index.json");
const dwarven = require("./dwarven.json");
const elven = require("./elven.json");

exports.index = {
  ...index,
  tableData: {
    dwarven,
    elven,
  },
};