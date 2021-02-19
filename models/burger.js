const orm = require('../config/orm');

const burger = {
    selectAll: (callback) => {
        orm.selectAll((err, res) => {

            console.log(res);
            callback(res);
        });
    },
    insertOne: (burger, callback) => {
        orm.insertOne(burger, (err, res) => {

            console.log(res);
            callback(res)
        });
    },
    updateOne: (id, callback) => {
        orm.updateOne(id, (err, res) => {
        console.log(res);
        callback(res);
        });
    }
};

module.exports = burger;