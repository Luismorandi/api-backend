import { Router } from "express";
import { getUsers } from "../controllers/usersController.js";
const users = Router();

users.get("/", getUsers);

export default users;
