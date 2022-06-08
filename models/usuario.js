module.exports = (sequelize, dataTypes) => {
    let alias = "usuario"
    let cols = {
        usuario_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        nombre: {
            type: dataTypes.STRING
        }, 
        apellido: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        }, 
        email: {
            type: dataTypes.STRING
        }, 
        direccion: {
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.STRING
        }
    }

   let config = {
       tableName: "usuario",
       timestamps: false
   } 

   const usuario = sequelize.define (alias, cols, config)

   return usuario
}