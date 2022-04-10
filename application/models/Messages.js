var db = require('../db');
const MessagesModel = {};

MessagesModel.create = (item, sender, receiver, body) => {
    let baseSQL = 'INSERT INTO GatorTrade.Messages (item, sender, receiver, body) VALUES (?,?,?,?);';
    return db.execute(baseSQL, [item, sender, receiver, body])
        .then(([results, fields]) => {
            return Promise.resolve(results && results.affectedRows);
        })
        .catch((err) => Promise.reject(err));
}


module.exports = MessagesModel;