const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost:27017/todo_db', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
  if (error) {
    console.log('Connection to db failed')
  }
});
const todo = require('./todo.model')