const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('js', 'root', 'sat2003yansh', {
    host: 'localhost',
    logging: false,
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

/*const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.ownerAdmin = require('./admin_auth_model')(sequelize, DataTypes);
db.users = require('./user_model')(sequelize, DataTypes);
*/
sequelize.sync({ force: false });
//module.exports = db;
module.exports = sequelize;
