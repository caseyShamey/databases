var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('select * from messages', (err, messages) => {
        if (err) {
          callback(err);
        } else {
          callback(null, messages);
        }
      });
    }, // a function which produces all the messages
    post: function (callback) {
      db.query('insert into messages', (err, messages) => {
        if (err) {
          callback(err);
        } else {
          callback(null, messages);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('select * from users', (err, users) => {
        if (err) {
          callback(err);
        } else {
          callback(null, users);
        }
      });
    },
    post: function (callback) {
      db.query('insert into users', (err, users) => {
        if (err) {
          callback(err);
        } else {
          callback(null, users);
        }
      });
    }
  }
};

