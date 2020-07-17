var orm = require("../config/orm.js")
// Selects all data from burgers table
var burger = {
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },         // creates arrays using the variables "cols, vals"
    create: (cols, vals, cb) => {
        orm.create("burgers", cols, vals, (res) => {
            cb(res);
        });
    },      // Updates the table burgers
    update: (objColVals, condition, cb) => {
        orm.update("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    },      // Deletes the data for table burgers
    delete: (condition, cb) => {
        orm.delete("burgers", condition, (res) => {
            cb(res);
        })
    }
}
module.exports = burger;