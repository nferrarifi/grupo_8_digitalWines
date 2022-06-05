module.exports = (sequelize, dataTypes) => {
    let alias = "transaccion"
    let cols = {
        transaccion_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        user_id: {
            type: dataTypes.STRING
        }, 
        producto_id: {
            type: dataTypes.STRING
        }
    }

   let config = {
       tableName: "transacciones",
       timestamps: false
   } 

   const transaccion = sequelize.define (alias, cols, config)

   transaccion.associate = function (models) {
       transaccion.belongsTo (models.usuario), {
           as: "usuario_transaccion",
           foreignKey: "usuario_id"
       }
   }

   transaccion.associate = function (models) {
    transaccion.belongsTo (models.producto), {
        as: "producto_transaccion",
        foreignKey: "producto_id"
    }
}

   return transaccion
}