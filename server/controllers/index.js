var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          throw err;
        } else {
          res.json(results);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [ req.body.message, req.body.username, req.body.roomname ];
      models.messages.post(params, (err, results) => {
        if (err) {
          throw err;
        } else {
          res.json(results);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) {
          throw err;
        } else {
          res.json(results);
        }
      });
    }, // a function which handles a get request for all users
    post: function (req, res) {
      var params = [ req.body.username ];
      models.users.post(params, (err, results) => {
        if (err) {
          throw err;
        } else {
          res.json(results);
        }
      });
    }
  } // a function which handles posting a message to the database
};

