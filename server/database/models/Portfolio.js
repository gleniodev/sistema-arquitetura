const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Portfolio extends Model {

        static associate(models) {
            Portfolio.belongsTo(models.Usuario, {
                foreignKey: "fk_usuario",
                as: "usuario"
            }),
                Portfolio.belongsTo(models.Categoria, {
                    foreignKey: "fk_categoria",
                    as: "categoria"
                }),
                Portfolio.belongsTo(models.EnderecoObra, {
                    foreignKey: "fk_endereco_obra",
                    as: "enderecoObra"
                })
        }
    }
    Portfolio.init({
        id_projeto: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        descricao: {
            type: DataTypes.STRING(80),
            allowNull: false,
        },
        area_terreno: {
            type: DataTypes.STRING(6),
            allowNull: false,
        },
        area_construida: {
            type: DataTypes.STRING(6),
            allowNull: false,
        },
        tipologia: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        url_img_1: {
            type: DataTypes.STRING(500),
            allowNull: true,
            defaultValue: 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'
        },
        url_img_2: {
            type: DataTypes.STRING(500),
            allowNull: true,
            defaultValue: 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'
        },
        url_img_3: {
            type: DataTypes.STRING(500),
            allowNull: true,
            defaultValue: 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'
        },
        url_img_4: {
            type: DataTypes.STRING(500),
            allowNull: true,
            defaultValue: 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'
        },
        url_img_5: {
            type: DataTypes.STRING(500),
            allowNull: true,
            defaultValue: 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'
        },
        fk_categoria: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        fk_endereco_obra: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        fk_usuario: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        }
    },
        {
            tableName: "projetos",
            sequelize,
            timestamps: false
        })

    return Portfolio
}
