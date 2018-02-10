var dbConnection = require('../db/index.js');
var express = require('express');
var router = require('../routes.js');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
     
      dbConnection.query('SELECT users.username, rooms.roomname, messages.content FROM users, rooms, messages', function(err, results) {        
        if (err) {
          throw err;
        }
        callback(err, results);
        
      });
      
    // when we receive get request from the controller we want to get data from the database
    // then we can get the messages from the database and pass it back to the controller
    }, 

    // a function which can be used to insert a message into the database
    post: function (data) {
      console.log("MODELS data:", data);
      dbConnection.query('INSERT INTO users (username) VALUES("' + data.username + '")');
      dbConnection.query('INSERT INTO rooms (roomname) VALUES("' + data.roomname + '")');
      dbConnection.query('INSERT INTO messages (content) VALUES("' + data.message + '")'); // + data.username + 
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



