module.exports = function (sequelize, DataTypes) {
    const Image = sequelize.define('Image', {
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        caption: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    Image.associate = function (models) {
        Image.belongsTo(models.Mentor, {
            foreignKey: {
                allowNull: false,
            },
        });

        Image.belongsTo(models.Rookie, {
            foreignKey: {
                allowNull: false,
            },
        });
    };

    return Image;
};
