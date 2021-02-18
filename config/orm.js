const { connection } = require('../config/connection');

const orm = {
    selectAll: function(callback) {
        const query = 'SELECT * FROM burgers';

        connection.query(query, function(err, res) {
            if(err) throw err;

            callback(res);
        });
    },

    insertOne: function(burger, callback) {
        const query = 'INSERT INTO burgers (burger_name) VALUES (?)';
        connection.query(query, burger, function(err, res){
            if(err) throw err;

            callback(res);
        });
    },
    
    updateOne: function(id, callback) {
        const query = 'UPDATE burgers SET devoured=true WHERE id=?';
        connection.query(query, id, function(err, res){
            if(err) throw err;

            callback(res);
        });
    }
};

module.exports = {orm: orm};