import express from "express"; 
import path from "path";
import routerAdmin from "./routerAdmin";
import router from "./router";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/types/config";

/**1-ENTRANCE **/
const app =express();
app.use(express.static(path.join(__dirname, "public"))) // faylorlarni public papkasidan olish uchun
app.use(express.urlencoded({extended: true})); // tradidional API uchun
app.use(express.json()); // rest API uchun
app.use(morgan(MORGAN_FORMAT));


/**2-SESSIONS **/

/**3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/**4-ROUTERS **/
app.use("/admin", routerAdmin);          //SSR: EJS
app.use("/", router);                   //SPA: REACT              middleware Design pattern

export default app; // module.exports = app in commonjs
