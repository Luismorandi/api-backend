import { Router } from "express";
import { getUsers } from "../controllers/usersController.js";
const products = Router();

products.get("/", getUsers);

export default products;
