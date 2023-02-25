import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const IsLoggedIn = async (req, res, next) => {
    try {
        const LoggedIn = JWT.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        req.user = LoggedIn;
        next();
    } catch(error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: "Unauthorized access",
            error
        });
    }
}

export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (user.role !== 1) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized access",
            });
        }
        else {
            next();
        }

    } catch (error)
    {
        console.log(error);
        res.status(401).json({
            success: false,
            message: "Error in admin middleware",
            error
        })
    }
}