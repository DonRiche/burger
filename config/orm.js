var connection = require("./connection.js");

// ORM
// =============================================================

var orm = {
    // Here our ORM is creating a simple method for performing a query of the entire table.
    // We make use of the callback to ensure that data is returned only once the query is done.
    selectAll: function (tableName, callback) {
        var s = "SELECT * FROM " + tableName;
        connection.query(s, function (err, result) {
            callback(result);
        });
    },

    // insertOne: function (tableName, callback) {
    //     var s = "INSERT INTO " + tableName + " (text, complete) VALUES (?,?)";
    //     burgers.complete = burgers.complete || 0;
    //     connection.query(s, [
    //         burgers.text, burgers.complete
    //     ], function (err, result) {

    //         return callback(result);

    //     });
    // },

    // updateOne: function (tableName, callback) {
    //     var s = "UPDATE " + tableName + " SET text=? WHERE id=?";

    //     connection.query(s, [
    //         burgers.text, burgers.id
    //     ], function (err, result) {

    //         return callback(result);

    //     });
    // }

};

module.exports = orm;