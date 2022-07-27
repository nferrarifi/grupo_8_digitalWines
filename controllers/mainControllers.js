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
    const user = req.session.user;
    let destacados = await db.producto.findAll({
      where: {
        destacado: 2,
      },
      limit: 6,
    });

    res.render("index", { destacados, user });
  },

  productCart: (req, res) => {
    const user = req.session.user;
    res.render("products/productCart", { user });
  },

  about: (req, res) => {
    const user = req.session.user;
    res.render("about-us", { user });
  },
};

module.exports = mainControllers;
