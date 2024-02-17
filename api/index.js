import express, { json } from "express";
import mongoose from "mongoose";
import api from "./routes/auth.js";

import dotenv from "dotenv"
dotenv.config();

// DataBase connection
mongoose.connect(process.env.DB_CONNECT,{
    // useNewUrlParser : true,
    // useUnifiedTopology : true,
    // useCreateIndex : true
}).then(() => console.log("DB connected")).catch((err) => console.log(err));

const app = express();
const PORT = 8800;

app.use(json());

app.use('/api/auth',api);


app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
