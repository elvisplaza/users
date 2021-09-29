const express = require('express');
const userRoutes = express.Router();


const { createUser, deleteUser } = require('./userServices');

userRoutes.route("/")
  .post(createUser);

// individual user routes
userRoutes.route("/:id")
  .delete(deleteUser);

export default userRoutes