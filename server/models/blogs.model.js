const { string } = require('joi');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema= new Schema({
    title:{type:String, required:true},
    content:{type:String, required:true},
    date:{type:Date, required:true},
    thumbnail:{type:String, required:false},


},{
    timestamps:true,
});

const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;

