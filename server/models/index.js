var dbConnection = require('../db/index.js');
var express = require('express');
var router = require('../routes.js');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
     
      dbConnection.query('SELECT messages.content, rooms.roomname, users.username FROM messages, rooms, users WHERE messages.id_roomname = rooms.id AND messages.id_users = users.id', function(err, results) {        
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
      dbConnection.query('INSERT IGNORE INTO users (username) VALUES("' + data.username + '")');
      dbConnection.query('INSERT IGNORE INTO rooms (roomname) VALUES("' + data.roomname + '")');
      
      var roomId;
      var userId;
      dbConnection.query('SELECT rooms.id FROM rooms WHERE roomname ="' + data.roomname + '"', function(err, results) {
        if (err) {
          throw err;
        }
        roomId = results[0].id;
        dbConnection.query('SELECT users.id FROM users WHERE username ="' + data.username + '"', function(err, results) {
          if (err) {
            throw err;
          }
          userId = results[0].id;
          console.log('IDs:', roomId, userId);
          dbConnection.query('INSERT INTO messages (content, id_roomname, id_users) VALUES("' + data.message + '",' + roomId + ',' + userId + ')');
        });
      });

      // dbConnection.query('INSERT INTO messages (content, id_roomname, id_users) VALUES("' + data.message + ',' + roomId + ',' + userId + '")');
      //INSERT INTO messages (content, id_roomname, id_users) VALUES ('walking', 1, 2);     
      //extract room ID using roomname;
      //extract username ID using username;

      //id's are being hardcoded for now. We need to figure out how to extract them from the string information.
      
      // when we receive get request from the client we want to insert the data into our database
      // send success message      
    } 
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      dbConnection.query('SELECT username FROM users', function(err, results) {
        if (err) {
          throw err;
        }
        callback(err, results);
      });
    },
    post: function (data) {
      dbConnection.query('INSERT IGNORE INTO users (username) VALUES("' + data.username + '")');
    }
  }
};



