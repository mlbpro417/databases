var dbConnection = require('../db/index.js');
var express = require('express');
var router = require('../routes.js');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function () {
      dbConnection.connect();
      dbConnection.query('SELECT users.username, rooms.roomname, messages.content FROM users, rooms, messages', function(err, results) {        
        if (err) {
          throw err;
        }
        console.log(results);
      });
    // when we receive get request from the controller we want to get data from the database
    // then we can get the messages from the database and pass it back to the controller
    }, 

    // a function which can be used to insert a message into the database
    post: function () {
      dbConnection.connect();
    // when we receive get request from the client we want to insert the data into our database
    // send success message
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


