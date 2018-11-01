var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if (err) {
          throw err;
        } else {
          res.json(data);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var data = req.body;
      console.log('message data', data);
      models.messages.post(data, (err, data) => {
        if (err) {
          throw err;
        } else {
          console.log('res data', data);
          res.json(data);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get((err, data) => {
        if (err) {
          throw err;
        } else {
          res.json(data);
        }
      });
    }, // a function which handles a get request for all users
    post: function (req, res) {
      var data = req.body;
      console.log('data', data);
      models.users.post(data, (err, data) => {
        if (err) {
          throw err;
        } else {
          res.json(data);
        }
      });
    }
  } // a function which handles posting a message to the database
};

