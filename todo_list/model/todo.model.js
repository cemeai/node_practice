const mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    item: {
        type: String,
        required: 'Required'
    }
}, { collection: 'todo' });

mongoose.model('todo', todoSchema)