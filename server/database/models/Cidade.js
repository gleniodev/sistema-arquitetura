const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Cidade extends Model {

        static associate(models) {
            Cidade.belongsTo(models.Estado, {
                foreignKey: "fk_estado",
                as: "estado"
            })
            Cidade.hasMany(models.EnderecoObra, {
                foreignKey: "fk_cidade",
                as: "cidadeEnderecoObra"
            })
            Cidade.hasMany(models.EnderecoResidencial, {
                foreignKey: "fk_cidade",
                as: "cidadeEnderecoResidencial"
            })
        }
    }
    Cidade.init({
        id_cidade: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        nome: {
            type: DataTypes.STRING(120),
            allowNull: false
        },
        fk_estado: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true
        }
    },
        {
            tableName: "cidades",
            sequelize,
            timestamps: false
        })
    return Cidade
}


