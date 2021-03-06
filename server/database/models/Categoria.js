const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Categoria extends Model {

        static associate(models) {
            Categoria.hasMany(models.Portfolio, {
                foreignKey: "fk_categoria",
                as: "categoriaPortfolio"
            })
        }
    }
    Categoria.init({
        id_categoria: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        nome: {
            type: DataTypes.STRING(80),
            allowNull: false
        }
    },
        {
            tableName: "categorias",
            sequelize,
            timestamps: false
        })

    return Categoria
}
