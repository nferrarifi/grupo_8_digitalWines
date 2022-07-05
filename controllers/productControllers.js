const { query } = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const bcrypt = require("bcryptjs");
const { redirect } = require("express/lib/response");
let { validationResult } = require("express-validator");
/* const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8")); */
const db = require("../models/index");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

productControllers = {
  create: (req, res) => {
    let errors = validationResult(req).errors;
    console.log(errors);
    if (errors.length > 0) {
      return res.render("products/newProduct", { errors });
    }
    const {
      nombre,
      precio,
      descuento,
      categoria,
      tamaño,
      descripcion,
      destacado,
    } = req.body;

    db.producto
      .create({
        nombre,
        precio,
        descuento,
        categoria,
        tamaño,
        destacado,
        imagen: req.file.filename,
        descripcion,
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
  products: async (req, res) => {
    let products = await db.producto.findAll({
      where: {
        destacado: 2,
      },
    });

    res.render("products/products", { products });
  },
  productDetail: (req, res) => {
    db.producto.findByPk(req.params.id).then((product) => {
      res.render("products/productdetail", { product });
    });
  },
  edit: (req, res) => {
    db.producto.findByPk(req.params.id).then((productToEdit) => {
      res.render("products/product-edit-form", { productToEdit });
    });
  },

  update: (req, res) => {
    let errors = validationResult(req).errors;
    console.log(errors);
    if (errors.length > 0) {
      return res.render("products/product-edit-form", { errors });
    }
    let id = req.params.id;
    const {
      nombre,
      precio,
      descuento,
      categoria,
      tamaño,
      descripcion,
      destacado,
    } = req.body;
    db.producto
      .update(
        {
          nombre,
          precio,
          descuento,
          categoria,
          tamaño,
          destacado,
          imagen: req.file.filename,

          descripcion,
        },
        {
          where: {
            producto_id: id,
          },
        }
      )
      .then(() => {
        return res.redirect("/products");
      });
  },

  destroy: (req, res) => {
    id = req.params.id;
    db.producto
      .update({ destacado: 1 }, { where: { producto_id: id } })
      .then(() => {
        return res.redirect("/products");
      });
  },

  search: (req, res) => {
    let { search } = req.query;
    console.log({ search });

    db.producto
      .findAll({
        where: { nombre: { [Op.like]: `%${search}%` } },
      })
      .then((products) => res.render("products/products", { products }))
      .catch((e) => {
        console.log(e);
        console.log("que macana");
      });
  },
};

module.exports = productControllers;
