const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "wwwwwgunner", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
