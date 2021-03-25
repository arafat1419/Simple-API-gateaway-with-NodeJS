module.exports = (sequelize, DataTypes) =>
{
    const Pekerjaan = sequelize.define('Pekerjaan',
    {
        id_pekerjaan : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          pangkat : {
            type: DataTypes.STRING,
            allowNull: false
          },
          dibutuhkan : {
              type: DataTypes.INTEGER,
              allowNull: false
          },
          createdAt : {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false
          },
          updatedAt : {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false
          }
    },
    {
        tableName : 'pekerjaan'
    });
    return Pekerjaan;
}