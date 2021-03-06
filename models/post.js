const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// comments are subdocuments
const commentSchema = new Schema({
    content: { type: String, required: true },
    date: Date,
    author: { type: String, default: "Anon" },
    }, {
    timestamps: true,
});

const postSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: Date,
    author: { type: String, required: true },
    comments: [commentSchema],
    }, {
    timestamps: true,
});


module.exports = mongoose.model('Post', postSchema);