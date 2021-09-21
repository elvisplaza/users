import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({

});

module.exports = mongoose.model('User', userSchema, 'users');
