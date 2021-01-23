module.exports = function (sequelize, DataTypes) {
    const Review = sequelize.define('Review', {
        comment:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        stars: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
    return Review;
};