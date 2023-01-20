import { Router } from "express";
import Info from "./info-route.js";
import Random from "./random-route.js";
import Login from "./login-route.js";
import Users from "./users.js";



const mainRouter = Router();

mainRouter.use("/info", Info);
mainRouter.use("/random", Random);
mainRouter.use("/login", Login);
mainRouter.use("/users", Users);




export default mainRouter;
