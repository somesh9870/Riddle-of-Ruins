const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connection = require("./config/db");
const userRouter = require("./routes/user.routes");

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (err) {
    console.log("Not connected to db");
  }
  console.log(`server is running on port ${process.env.port}`);
});
