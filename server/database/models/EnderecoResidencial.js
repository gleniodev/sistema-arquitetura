const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class EnderecoResidencial extends Model {

        static associate(models) {
            EnderecoResidencial.belongsTo(models.Cidade, {
                foreignKey: "fk_cidade",
                as: "cidade"
            })
            EnderecoResidencial.hasOne(models.Usuario, {
                foreignKey: "fk_endereco_residencial",
                as: "enderecoResidencialUsuario"
            })
        }
    }
    EnderecoResidencial.init({
        id_endereco_res: {
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
            tableName: "enderecos_residenciais",
            sequelize,
            timestamps: false
        })

    return EnderecoResidencial
}
