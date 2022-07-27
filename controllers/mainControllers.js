const { query } = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const db = require("../models/index");
const sequelize = db.sequelize;

const mainControllers = {
  index: async (req, res) => {
    let destacados = await db.producto.findAll({
      where: {
        destacado: 2,
      },
      limit: 6,
    });

    res.render("index", { destacados });
  },

  productCart: (req, res) => {
    res.render("products/productCart");
  },

  about: (req, res) => {
    res.render("about-us");
  },
};

module.exports = mainControllers;
