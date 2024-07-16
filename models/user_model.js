const sequelize = require("../utils/index");
const DataTypes = require("sequelize").DataTypes;

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    role: {
        type: DataTypes.ENUM,
        values: ['Admin','Student', 'Manager'],
        allowNull: false,
    },
    plan: {
        type: DataTypes.ENUM("A", "B"),
        allowNull: false,
    },
    licenses: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
},
    {
        tableName: 'users',
        timestamps: true
    }
);

module.exports = User;
