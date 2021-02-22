module.exports = function (sequelize, DataTypes) {
    const Thread = sequelize.define('Thread', {
        // title: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         len: [1]
        //     }
        // },
        // body: {
        //     type: DataTypes.TEXT,
        //     allowNull: false,
        //     len: [1]
        // }
    });

    Thread.associate = function (models) {
        // We're saying that a Note should belong to an User
        // A Note can't be created without an User due to the foreign key constraint
        Thread.HasMany(models.Mentor, {
            onDelete: 'CASCADE'
        });
    };

    return Thread;
};
