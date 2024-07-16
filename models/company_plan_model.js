const sequelize = require("../utils/index");
const DataTypes = require("sequelize").DataTypes;

const Plan = sequelize.define("Plan", {
    username: {
        type: DataTypes.STRING,
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
    },
    years: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    expiryDate: {
        type: DataTypes.DATE,
        allowNull: true,

    }
},
    {
        tableName: 'plans',
        updatedAt: false
    }
);

module.exports = Plan;