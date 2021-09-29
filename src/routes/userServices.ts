import User from './../user/User.class';

import { Request, Response } from 'express';

const createUser = async (req: Request, res: Response) => {
  const userObj = req.body;
  try {
    const newUser = await new User().createUser(userObj);
    return res.status(201).send({ data: newUser })
  } catch (err) {
    console.log("error in userServices - createUser", err);
  }
}

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req?.params;
  try {
    const deletedUser = await new User().deleteUser(id);

    return res.status(200).send({ data: deletedUser })
  } catch (err) {
    console.log("error in userServices - deleteUser", err);
  }

}

module.exports = {
  deleteUser,
  createUser
}