const User = require('./user.model');
const ObjectId = require('mongodb').ObjectId;

import { IUser, UserSchema } from './user.types';


// helper functions
import { formatModelProperties } from './../utils/formatModelProperties';

class UserClass {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(){ }

  public createUser = async (userObj: IUser): Promise<UserSchema> => {
    const formattedAnswers = formatModelProperties(userObj)
    const newUser = new User(formattedAnswers)
    newUser.save();
    return newUser;
  }

  public deleteUser = async (userId: string): Promise<UserSchema> => {
    const deletedUser = await User.delete({
      _id: ObjectId(userId)
    })

    return deletedUser;
  }
}

export default UserClass