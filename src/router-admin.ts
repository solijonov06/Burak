import express from "express";
const routerAdmin = express.Router(); 
import restarauntController from "./controllers/restaraunt.controller"
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

/*Restarauunt */
routerAdmin.get("/", restarauntController.goHome);
routerAdmin
    .get("/login", restarauntController.getLogin)
    .post("/login", restarauntController.processLogin);
routerAdmin
    .get("/signup", restarauntController.getSignup)
    .post("/signup", makeUploader("members").single("memberImage"),restarauntController.processSignup);
routerAdmin.get("/logout", restarauntController.logout);
routerAdmin.get("/check-me", restarauntController.checkAuthSesssion);


/*product */
routerAdmin.get("/product/all",
restarauntController.verifyRestaraunt,    
productController.getAllProducts
);
routerAdmin.post("/product/create",
    restarauntController.verifyRestaraunt,
    // uploadProductImage.single("productImage"),
    makeUploader("products").single("productImage"),
     productController.createNewProduct

);
routerAdmin.post("/product/:id", 
    restarauntController.verifyRestaraunt,
    productController.updateChosenProduct
);


/*user */
export default routerAdmin; // module.exports = router in commonjs
