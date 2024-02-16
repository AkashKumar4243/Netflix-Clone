import express from "express";
import mongoose from "mongoose";


import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 8800;

app.listen(PORT, () => {console.log(`server is listening on port ${PORT}`)});