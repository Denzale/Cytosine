module.exports = function (sequelize, DataTypes) {
    const Rookie = sequelize.define('Rookie', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Rookie;
};