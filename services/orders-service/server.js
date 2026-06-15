const express = require("express");
const cors = require("cors");

const ordersRouter = require("./orders");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/orders", ordersRouter);

app.listen(3003, () => {
  console.log("Order Service töötab pordil 3003");
});