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
        age: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        experience:{
            type: DataTypes.STRING,
            allowNull: false,
        }

    });

    
    Mentor.associate = function (models) {
        // We're saying that a Mentor should belong to an User
        // A Mentor can't be created without an User due to the foreign key constraint
            Mentor.belongsTo(models.User, {
                foreignKey: {
                    allowNull: false
                }
            });
        };

    return Mentor;


};