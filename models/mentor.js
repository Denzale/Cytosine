module.exports = function (sequelize, DataTypes) {
    const Mentor = sequelize.define('Mentor', {
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
            allowNull: false,
        },
    });
    return Mentor;
};