const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

const USERS_SERVICE = "http://localhost:3001/api/users";
const PRODUCTS_SERVICE = "http://localhost:3002/api/products";
const ORDERS_SERVICE = "http://localhost:3003/api/orders";

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/users", async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `${USERS_SERVICE}${req.url}`,
      data: req.body,
      headers: { Authorization: req.headers.authorization }
    });
    res.status(response.status).json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: "Users service error" });
  }
});

app.use("/api/products", async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `${PRODUCTS_SERVICE}${req.url}`,
      data: req.body
    });
    res.status(response.status).json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: "Products service error" });
  }
});

app.use("/api/orders", async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `${ORDERS_SERVICE}${req.url}`,
      data: req.body,
      headers: { Authorization: req.headers.authorization }
    });
    res.status(response.status).json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: "Orders service error" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Gateway running on port ${PORT}`);
});