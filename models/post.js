const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// comments are subdocuments
const commentSchema = new Schema({
    content: { type: String, required: true },
    date: Date,
    author: [{
        type: mongoose.Schema.Types.String,
        ref: 'User'
      }],
    }, {
    timestamps: true,
});



const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: Date,
    author: [{
      type: mongoose.Schema.Types.String,
      ref: 'User'
    }],
    comments: [commentSchema],
}, {
    timestamps: true,
});

const Post = mongoose.model('Post', postSchema)

module.exports = Post;