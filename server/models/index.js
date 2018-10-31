var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('select * from messages', (err, rows)=> {
        if (err) {
          callback(err);
        } else {
          callback(null, rows);
        }
      });
    }, // a function which produces all the messages
    post: function (callback) {
      db.query('insert into messages', (err, rows)=> {
        if (err) {
          callback(err);
        } else {
          callback(null, rows);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('select * from users', (err, rows)=> {
        if (err) {
          callback(err);
        } else {
          callback(null, rows);
        }
      });
    },
    post: function (callback) {
      db.query('insert into users', (err, rows)=> {
        if (err) {
          callback(err);
        } else {
          callback(null, rows);
          console.log('hi');
        }
      });
    }
  }
};

