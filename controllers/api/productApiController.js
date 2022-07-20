const db = require("../../models");
const producto = db.producto;
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const productApiController = {
  list: async (req, res) => {
    let products = await db.producto.findAll({
      attributes: ["producto_id", "nombre", "descripcion", "precio"],
      where: {
        destacado: 2,
      },
    });
    let respuesta = {
      meta: {
        status: 200,
        total: products.length,
        url: "/api/product/:id",
      },
      data: products,
    };

    res.json(respuesta);
  },
  detail: async (req, res) => {
    console.log(req.params.id);
    let products = await db.producto.findByPk(req.params.id);
    let respuesta = {
      meta: {
        status: 200,
      },
      data: products,
    };

    res.json(respuesta);
  },
};

module.exports = productApiController;
