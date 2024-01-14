const db = require("../config/db");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");

class Url extends Sequelize.Model {

}

Url.init(
  {
    url: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    miniUrl: {
      type: Sequelize.STRING,
    },

  },
  { sequelize: db, modelName: "url" }
);


module.exports = Url;
