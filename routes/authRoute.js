import express from "express";
import { registerController, loginController, testController } from "../controllers/authController.js";
import { isAdmin, IsLoggedIn } from "../middlewares/authMiddleware.js";
//import registerController;

//router object

const router = express.Router();


//routes

//REGISTER USER

router.post("/register", registerController);

//LOGIN USER

router.post("/login", loginController)

router.get("/test",IsLoggedIn, isAdmin, testController);

export default router;