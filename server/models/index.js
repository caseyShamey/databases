var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryStr = 'select messages.id, messages.message, messages.roomname, users.username from message left outer join users on (message.userid = users.id) order by message.id desc';
      db.query(queryStr, (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryStr = 'insert into messages(message, userid, roomname) values (?, select id from users where username = ? limit 1), ?';
      db.query(queryStr, params, (err, results) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  // Ditto as above.get: function (callback) {
  users: {
    get: function (callback) {
      var queryStr = 'select * from users';
      db.query(queryStr, (err, results) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryStr = 'insert into users (username) values (?)';
      db.query(queryStr, params, (err, results) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
      });
    } // a function which can be used to insert a message into the database
  }
};
