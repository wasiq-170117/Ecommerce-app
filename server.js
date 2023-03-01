import express from "express";
import color from "colors";
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectMongoDb from './config/db.js';
import authRoutes from './routes/authRoute.js';
import cors from 'cors';

dotenv.config();

//database config

connectMongoDb();

//Staring app

const app = express();

//middlewares
app.use(cors());
app.use(express.json()); // no need of body parser now
app.use(morgan('dev'));

//routes

app.use("/api/v1/auth/", authRoutes);


app.get("/", (req, res) => {
    res.json(
        "<h1>Server is running completely fine</h1>");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=> {
    console.log(`Serve running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white);
});