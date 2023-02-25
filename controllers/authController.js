import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

//Register Controller

export const registerController = async (req, res) => {
    try {
        const {name, email, password, phone, address} = req.body;
        
        // Validation of Required entries

        if (!name)
        {
            return res.json({error: 'Name is required'});
        }

        if (!email)
        {
            return res.json({error: 'Email is required'});
        }

        if (!password)
        {
            return res.json({error: 'Password is required'});
        }

        if (!phone)
        {
            return res.json({error: 'Phone no. is required'});
        }

        if (!address)
        {
            return res.json({error: 'Address is required'});
        }

        // Check if the user is already registered or not

        const existingUser = await userModel.findOne({email});

        if (existingUser)
        {
            return res.status(200).json({
                success: true,
                message: "User is already registered"
            })
        }

        //Register User
        const hashedpassword = await hashPassword(password);

        const user = await new userModel({
            name,
            email, 
            password: hashedpassword, 
            phone, 
            address
        }).save((err, savedUser) => {
            if (err)
            {
                console.log(err);
            }

            else {
                console.log(`User ${savedUser} is saved successfully`);
                res.status(201).send({
                    success: true,
                    message: "User registered Successfully",
                    savedUser
                })
            }
        });
    } catch (error)
    {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in registration",
            error
        })
    }
}

//Login Controller

export const loginController = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        if (!email || !password)
        {
            res.status(404).json({
                success: false,
                message: "Invaild credentials"
            });
        }

        const user = await userModel.findOne({email});

        if (!user)
        {
            return res.status(404).json({
                success: false,
                message: "Email is not registered",
            });
        }

        const matched = await comparePassword(password, user.password);
        if (!matched)
        {
            return res.status(200).json({
                success: false,
                message: "Password is not correct"
            });
        }

        //token
        const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '7d'
        });

        res.status(200).json({
            success: true,
            message: "User Logged in Successfully",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address
            },
            token
        })

    } catch (error)
    {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in login",
            error
        });
    }
};

export const testController = (req, res) => {
    res.json("Test Control is good now");
}