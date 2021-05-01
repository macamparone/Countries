const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Activity", { // defino como se va  a llamar la base que creo en postgress
    id: {
      type: DataTypes.UUID, // genero los ID de manera automatica
      allowNull: false,// puede ser o no null el campo.
      primaryKey: true, // llave primaria porque es el ID.
      unique: true, // si o si, campo unico.
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    season: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
