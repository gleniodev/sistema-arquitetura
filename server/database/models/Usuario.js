module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define("Usuario",
        {
            id_usuario: {
                type: DataType.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true
            },
        },
        {
            tableName: "usuarios",
            sequelize,
            timestamps: false
        }
    )
}