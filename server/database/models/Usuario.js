const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Usuario extends Model {

        static associate(models) {
            Usuario.belongsTo(models.EnderecoResidencial, {
                foreignKey: "fk_endereco_residencial",
                as: "enderecoResidencial"
            })
            Usuario.hasMany(models.Portfolio, {
                foreignKey: "fk_usuario",
                as: "usuarioPortfolio"
            })
        }
    }
    Usuario.init({
        id_usuario: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        nome_completo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        data_nascimento: {
            type: DataTypes.DATE,
            allowNull: false
        },
        pessoa_juridica: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false
        },
        cpf_cnpj: {
            type: DataTypes.STRING(14),
            allowNull: false,
            unique: true
        },
        telefone_1: {
            type: DataTypes.STRING(11),
            allowNull: false
        },
        telefone_2: {
            type: DataTypes.STRING(11),
            allowNull: true
        },
        nome_usuario: {
            type: DataTypes.STRING(80),
            allowNull: true
        },
        senha: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        nivel_acesso: {
            type: DataTypes.ENUM('cliente', 'administrador'),
            allowNull: false,
            default: 'cliente'
        },
        fk_endereco_residencial: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true
        }
    },
        {
            tableName: "usuarios",
            sequelize,
            timestamps: false
        })
    return Usuario
}


