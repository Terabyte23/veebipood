const express = require("express");
const router = express.Router();
const axios = require("axios");

const USER_SERVICE = "http://localhost:3001/api/users";

router.post("/signup", async (req, res) => {
  try {
    const response = await axios.post(`${USER_SERVICE}/signup`, req.body);
    res.status(201).json(response.data);
  } catch (err) {
    res.status(400).json({ error: "Signup failed" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const response = await axios.post(`${USER_SERVICE}/login`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(401).json({ error: "Login failed" });
  }
});

router.post("/logout", async (req, res) => {
  try {
    const response = await axios.post(`${USER_SERVICE}/logout`, {}, {
      headers: { Authorization: req.headers.authorization }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Logout failed" });
  }
});

router.get("/me", async (req, res) => {
  try {
    const response = await axios.get(`${USER_SERVICE}/me`, {
      headers: { Authorization: req.headers.authorization }
    });
    res.json(response.data);
  } catch (err) {
    res.status(401).json({ error: "Not authorized" });
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${USER_SERVICE}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "User service not available" });
  }
});

module.exports = router;