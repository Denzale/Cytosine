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
            type: DataTypes.STRING,
            allowNull: false,
        },
        experience:{
            type: DataTypes.STRING,
            allowNull: false,
        }
        
    });
    return Mentor;
};