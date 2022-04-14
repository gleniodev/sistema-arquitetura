module.exports = (sequelize, DataType) => {
    const Portfolio = sequelize.define("Portfolio",
        {
            id_projeto: {
                type: DataType.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true
            },
            descricao: {
                type: DataType.STRING(80),
                allowNull: false,
            },
            area_terreno: {
                type: DataType.STRING(6),
                allowNull: false,
            },
            area_construida: {
                type: DataType.STRING(6),
                allowNull: false,
            },
            tipologia: {
                type: DataType.STRING(150),
                allowNull: false,
            },
            url_img_1: {
                type: DataType.STRING(500),
                allowNull: false,
            },
            url_img_2: {
                type: DataType.STRING(500),
                allowNull: false,
            },
            url_img_3: {
                type: DataType.STRING(500),
                allowNull: false,
            },
            url_img_4: {
                type: DataType.STRING(500),
                allowNull: false,
            },
            url_img_5: {
                type: DataType.STRING(500),
                allowNull: false,
            },
            fk_categoria: {
                type: DataType.INTEGER.UNSIGNED,
                allowNull: false,
            },
            fk_endereco_obra: {
                type: DataType.INTEGER.UNSIGNED,
                allowNull: false,
            },
            fk_cliente: {
                type: DataType.INTEGER.UNSIGNED,
                allowNull: false,
            }
        },
        {
            tableName: "projetos",
            sequelize,
            timestamps: false
        }
    )
}