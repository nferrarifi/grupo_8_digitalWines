const db = require("../../models");
const path = require("path");

const userApiController = {
  list: (req, res) => {
    db.usuario.findAll().then((usuarios) => {
      let respuesta = {
        count: usuarios.length,
        users: [],
      };

      usuarios.forEach((usuario) => {
        respuesta.users.push({
          id: usuario.usuario_id,
          name: usuario.nombre,
          email: usuario.email,
          detail: `/api/user/${usuario.usuario_id}`,
        });
      });
      res.json(respuesta);
    });
  },

  detail: (req, res) => {
    db.usuario
      .findByPk(req.params.id, {
        attributes: {
          exclude: ["password"],
        },
      })
      .then((usuario) => {
        let urlImagen = `/../../public/img/users/${usuario.imagen}`;

        res.json({ usuario, urlImagen });
      });
  },
};

module.exports = userApiController;
