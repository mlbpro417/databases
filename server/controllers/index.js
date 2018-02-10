var models = require('../models');

module.exports = {
  messages: {
  // a function which handles a get request for all messages
    get: function (req, res) {
      // when we receive get request from the client we want to invoke the get function on our model
      // then we can get the messages from the database
    }, 

    // a function which handles posting a message to the database
    post: function (req, res) {
      // when we receive a post request we want to invoke the post function on our model
      // then post the message to the database
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

