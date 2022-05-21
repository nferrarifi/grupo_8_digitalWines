const { query } = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const bcrypt = require("bcryptjs");
const { redirect } = require("express/lib/response");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

productControllers = {
  create: (req, res) => {
    res.render("products/newProduct");
  },

  store: (req, res) => {
    let newProduct = {
      id: products.length + 1,
      ...req.body,
    };
    console.log(newProduct);

    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products), "utf-8");

    res.redirect("products");
  },
};

module.exports = productControllers;
