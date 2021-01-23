module.exports = function (sequelize, DataTypes) {
    const Payment = sequelize.define('Payment', {
        cardName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cardNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cvc:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        date:{
            allowNull: false,
        },
    });
    return Payment;
};