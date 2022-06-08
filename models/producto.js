module.exports = (sequelize, dataTypes) => {
    let alias = "producto"
    let cols = {
        producto_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        nombre: {
            type: dataTypes.STRING
        }, 
        precio: {
            type: dataTypes.STRING
        },
        descuento: {
            type: dataTypes.STRING
        }, 
        categoria: {
            type: dataTypes.STRING
        }, 
        tamaño: {
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        }
    }

   let config = {
       tableName: "producto",
       timestamps: false
   } 

   const producto = sequelize.define (alias, cols, config)

   return producto
}