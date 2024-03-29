import express, { json } from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";

import dotenv from "dotenv";
dotenv.config();

// DataBase connection
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

const app = express();
const PORT = 8800;

app.use(json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
