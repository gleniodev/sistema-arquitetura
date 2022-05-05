const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class EnderecoObra extends Model {

        static associate(models) {
            EnderecoObra.belongsTo(models.Cidade, {
                foreignKey: "fk_cidade",
                as: "cidade"
            })
            EnderecoObra.hasMany(models.Portfolio, {
                foreignKey: "fk_endereco_obra",
                as: "enderecoObraPortfolio"
            })

        }
    }
    EnderecoObra.init({
        id_endereco_obra: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        endereco: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        numero: {
            type: DataTypes.STRING(5),
            allowNull: false
        },
        bairro: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        cep: {
            type: DataTypes.STRING(8),
            allowNull: false
        },
        complemento: {
            type: DataTypes.STRING(255),
            allowNull: true
        },

        fk_cidade: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    },
        {
            tableName: "enderecos_obras",
            sequelize,
            timestamps: false
        })

    return EnderecoObra
}
