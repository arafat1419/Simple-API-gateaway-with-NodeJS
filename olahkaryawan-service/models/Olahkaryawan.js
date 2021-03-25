module.exports = (sequelize, DataTypes) =>
{
    const Olahkaryawan = sequelize.define('Olahkaryawan',
    {
        id_karyawan : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          nama_karyawan : {
            type: DataTypes.STRING,
            allowNull: false
          },
          alamat : {
            type: DataTypes.STRING,
            allowNull: false
          },
          no_hp : {
            type: DataTypes.STRING,
            allowNull: false
          },
          gaji : {
            type: DataTypes.DECIMAL(15,2),
            allowNull: false
          },
          pangkat : {
            type: DataTypes.STRING,
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
        tableName : 'karyawan'
    });
    return Olahkaryawan;
}