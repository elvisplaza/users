import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {},
  password: {},
  properties: {},
  listing_reviews: {},
  user_reviews: {},
  payment_methods: {},
});

module.exports = mongoose.model('User', userSchema, 'users');
