module.exports = function (sequelize, DataTypes) {
    const Schedule = sequelize.define('Schedule', {
        sunday: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        monday: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        tuesday: {
            type: DataTypes.DATE,
            allowNull: false,
            len: [1]
        },
        wednesday: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        thursday: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        friday: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        saturday: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    Schedule.associate = function (models) {
        Schedule.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Schedule;
};