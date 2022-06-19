const { query } = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const bcrypt = require("bcryptjs");
const { redirect } = require("express/lib/response");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const db =require("../models/index")
const sequelize = db.sequelize;

productControllers = {
  create: (req, res) => {
    
    const { nombre,precio,descuento,categoria,tamano,imagenProducto,descripcion} = req.body;
    
    db.producto.create({
      nombre,precio,descuento,categoria,tamano,imagenProducto,descripcion
     
    })
      .then(() => {
        return res.redirect("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("Changos!");
      });
  },

  store: (req, res) => {


  

   return res.render("products/newProduct");
  },
 
};

module.exports = productControllers;
