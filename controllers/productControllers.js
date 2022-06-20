const { query } = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const bcrypt = require("bcryptjs");
const { redirect } = require("express/lib/response");
/* const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8")); */
const db =require("../models/index")
const sequelize = db.sequelize;

productControllers = {
  create: (req, res) => {
    console.log(req.file.filename)
    
    const { nombre,precio,descuento,categoria,tamaño,descripcion,destacado} = req.body;
    
    db.producto.create({
      nombre
      ,precio
      ,descuento
      ,categoria
      ,tamaño,
      destacado,
      imagen:req.file.filename,
      descripcion
     
    })
      .then(() => {
        return res.redirect("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("que macana");
      });
  },

  store: (req, res) => {


  

   return res.render("products/newProduct");
  },
  products: async(req, res) => {
    let products= await db.producto.findAll({
      where: {
        destacado:2
      }
    }

    )
    
    
    res.render("products/products", { products });
  },
 
};

module.exports = productControllers;
