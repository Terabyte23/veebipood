const express = require("express");
const router = express.Router();
const axios = require("axios");

const PRODUCT_SERVICE = "http://localhost:3002/api/products";

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(PRODUCT_SERVICE);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Product service not available" });
  }
});

router.get("/categories", async (req, res) => {
  try {
    const response = await axios.get(PRODUCT_SERVICE);
    const products = response.data.products || [];
    const categories = [...new Set(products.map((p) => p.category))];
    res.json({ categories });
  } catch (err) {
    res.status(500).json({ error: "Product service not available" });
  }
});

router.get("/category/:cat", async (req, res) => {
  try {
    const response = await axios.get(PRODUCT_SERVICE);
    const products = response.data.products || [];
    const cat = req.params.cat.toLowerCase();
    const filtered = products.filter((p) => p.category === cat);

    if (filtered.length === 0) {
      return res.status(404).json({ error: "Selle kategooriaga tooteid ei leitud" });
    }

    res.json({ products: filtered, count: filtered.length });
  } catch (err) {
    res.status(500).json({ error: "Product service not available" });
  }
});

router.get("/search", async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) return res.status(400).json({ error: "Lisa parameeter ?name=..." });

    const response = await axios.get(PRODUCT_SERVICE);
    const products = response.data.products || [];

    const results = products.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );

    res.json({ results, count: results.length });
  } catch (err) {
    res.status(500).json({ error: "Product service not available" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const response = await axios.get(`${PRODUCT_SERVICE}/${req.params.id}`);
    res.json(response.data);
  } catch (err) {
    res.status(404).json({ error: "Toodet ei leitud" });
  }
});

module.exports = router;