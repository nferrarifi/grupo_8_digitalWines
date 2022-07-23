const db = require("../../models");
const producto = db.producto;
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const productApiController = {
  list: async (req, res) => {
    let products = await db.producto.findAll({
        where: {
        destacado: 2,
      },
    });

    let respuesta ={
        meta: {
            status : 200,
            total: products.length,
            
        },
        data: []
    }

    products.forEach(producto => {
        respuesta.data.push({
            id: producto.producto_id,
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            url : `/api/product/${producto.producto_id}`
            
        })
        
    });
   
    res.json(respuesta)
},
detail: async (req, res) => {
    console.log(req.params.id)
    let products = await db.producto.findByPk(req.params.id);
    let urlImagen = `/../../public/img/product-create/${products.imagen}`
    let respuesta ={
        meta: {
            status : 200,
            
            
        },
        data: products,

       
    }
   
    res.json({respuesta,urlImagen})
}   
}


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
