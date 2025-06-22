import express from "express";
const routerAdmin = express.Router();
import restarauntController from "./controllers/restaraunt.controller"

routerAdmin.get("/", restarauntController.goHome);

routerAdmin.get("/login", restarauntController.getLogin);

routerAdmin.get("/signup", restarauntController.getSignup);

export default routerAdmin; // module.exports = router in commonjs
