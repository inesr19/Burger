const { orm } = require('../config/orm');

const burger = {
    selectAll: (callback) => {
        orm.selectAll((err, res) => {
            if(err) throw err;

            console.log(res);
            callback(res);
        });
    },
    insertOne: (burger, callback) => {
        orm.insertOne(burger, (err, res) => {
            if(err) throw err;

            console.log(res);
            callback(res)
        });
    },
    updateOne: (id, callback) => {
        if(err) throw err;

        console.log(res);
        callback(res);
    }
};

module.exports = {burger: burger};