const db = require("../../models");

const salesApiController = {
  list: (req, res) => {
    db.transaccion.findAll().then((ventas) => {
      let respuesta = {
        meta: ventas.length,
        data: [],
      };

      ventas.forEach((venta) => {
        respuesta.data.push({
          transaction_id: venta.transaccion_id,
          user_id: venta.user_id,
          product_id: venta.producto_id,
        });
      });
      res.json(respuesta);
    });
  },
};

module.exports = salesApiController;
