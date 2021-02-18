const { connection } = require('../config/connection');

const orm = {
    selectAll: (callback) => {
        const query = 'SELECT * FROM burgers';

        connection.query(query, (err, res) => {
            if(err) throw err;

            callback(res);
        });
    },

    insertOne: (burger, callback) => {
        const query = 'INSERT INTO burgers (burger_name) VALUES (?)';
        connection.query(query, burger, (err, res) => {
            if(err) throw err;

            callback(res);
        });
    },
    
    updateOne: (id, callback) => {
        const query = 'UPDATE burgers SET devoured=true WHERE id=?';
        connection.query(query, id, (err, res) => {
            if(err) throw err;

            callback(res);
        });
    }
};

module.exports = { orm: orm };