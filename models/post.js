const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// comments are subdocuments
const commentSchema = new Schema({
    content: String,
    date: Date,
}, {
    timestamps: true,
});


const postSchema = new mongoose.Schema({
    title: String,
    content: String, 
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
    comments: [commentSchema],
}, {
    timestamps: true,
});

const Post = mongoose.model('Post', postSchema)

module.exports = Post;