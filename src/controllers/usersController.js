
import { UserModel } from "../models/userModel.js";


export const  getUsers = async (req, res) => {
    const users = await UserModel.find()
      res.send(users)
  };