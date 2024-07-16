const sequelize = require("../utils/index");
const DataTypes = require("sequelize").DataTypes;

const OwnerAdmin = sequelize.define("admin_auth", {
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
    },   
    password:{
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true  
    }
},
{
    timestamp:false
});


module.exports = OwnerAdmin;