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
    post: function (data, callback) {
      console.log('message data', data);
      db.query(`insert into messages (message, created_at, username, roomname) values(${JSON.stringify(data.message)}, now(), ${JSON.stringify(data.username)}, ${JSON.stringify(data.roomname)})`), (err, messages) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, messages);
        }
      };
    } // a function which can be used to insert a message into the database
  },

  // Ditto as above.get: function (callback) {
  users: {
    get: function (callback) {
      db.query('select * from users', (err, users) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, users);
        }
      });
    }, // a function which produces all the messages
    post: function (data, callback) {
      console.log('data', data);
      db.query(`insert into users (username) values(${JSON.stringify(data.username)})`), (err, users) => {
        if (err) {
          callback(err, null);
        } else {
          console.log('made it here');
          callback(null, users);
        }
      };
    } // a function which can be used to insert a message into the database
  }
};
