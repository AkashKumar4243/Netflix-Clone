import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();


// DataBase connection
mongoose.connect(process.env.DB_CONNECT,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => console.log("DB connected")).catch((err) => console.log(err));

const app = express();
const PORT = 8800;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
