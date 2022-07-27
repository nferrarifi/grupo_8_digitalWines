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
    const user = req.session.user;
    let errors = validationResult(req).errors;
    console.log(errors);
    if (errors.length > 0) {
      return res.render("products/newProduct", { errors, user });
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
    const user = req.session.user;
    return res.render("products/newProduct", { user });
  },
  products: async (req, res) => {
    const user = req.session.user;
    let products = await db.producto.findAll({
      where: {
        [Op.or]: [{ destacado: 2 }, { destacado: 3 }],
      },
    });

    res.render("products/products", { products, user });
  },
  productDetail: async (req, res) => {
    const user = req.session.user;
    const recommended = await db.producto.findAll({ limit: 4 });
    console.log(recommended);
    db.producto.findByPk(req.params.id).then((product) => {
      res.render("products/productdetail", { product, recommended, user });
    });
  },
  edit: (req, res) => {
    const user = req.session.user;
    db.producto.findByPk(req.params.id).then((productToEdit) => {
      res.render("products/product-edit-form", { productToEdit, user });
    });
  },

  update: (req, res) => {
    const user = req.session.user;
    let errors = validationResult(req).errors;
    console.log(errors);
    if (errors.length > 0) {
      db.producto.findByPk(req.params.id).then((productToEdit) => {
        res.render("products/product-edit-form", {
          errors,
          productToEdit,
          user,
        });
      });
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
          descripcion,
          imagen: req.file?.filename || "winebottle.png",
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
    const user = req.session.user;
    let { search } = req.query;
    console.log({ search });

    db.producto
      .findAll({
        where: { nombre: { [Op.like]: `%${search}%` } },
      })
      .then((products) => res.render("products/products", { products, user }))
      .catch((e) => {
        console.log(e);
        console.log("que macana");
      });
  },
};

module.exports = productControllers;
