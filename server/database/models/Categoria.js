module.exports = (sequelize, DataType) => {
    const Portfolio = sequelize.define("Portfolio",
        {
            id_categoria: {
                type: DataType.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true
            },
            nome: {
                type: DataType.STRING(80),
                allowNull: false,
            },
        },
        {
            tableName: "categorias",
            sequelize,
            timestamps: false
        }
    )
}