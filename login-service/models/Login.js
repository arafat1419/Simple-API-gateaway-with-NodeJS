module.exports = (sequelize, DataTypes) =>
{
    const Login = sequelize.define('Login',
    {
        email : {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
          },
          password : {
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
        tableName : 'login'
    });
    return Login;
}