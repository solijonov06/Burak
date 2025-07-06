import express from "express";
const routerAdmin = express.Router(); 
import restarauntController from "./controllers/restaraunt.controller"

/*Restarauunt */
routerAdmin.get("/", restarauntController.goHome);
routerAdmin
    .get("/login", restarauntController.getLogin)
    .post("/login", restarauntController.processLogin);
routerAdmin
    .get("/signup", restarauntController.getSignup)
    .post("/signup", restarauntController.processSignup);
/*product */
/*user */
export default routerAdmin; // module.exports = router in commonjs
