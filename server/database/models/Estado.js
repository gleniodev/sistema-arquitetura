const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Estado extends Model {

        static associate(models) {
            Estado.hasMany(models.Cidade, {
                foreignKey: "fk_estado",
                as: "estadoCidade"
            })
        }
    }
    Estado.init({
        id_estado: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        uf: {
            type: DataTypes.STRING(2),
            allowNull: false
        }
    },
        {
            tableName: "estados",
            sequelize,
            timestamps: false
        })

    return Estado
}


