const express = require("express");
const cors = require("cors");

const usersRouter = require("./users");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);

app.listen(3001, () => {
  console.log("User Service töötab pordil 3001");
});