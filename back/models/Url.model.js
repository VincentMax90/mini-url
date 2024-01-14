const db = require("../config/db");
const Sequelize = require("sequelize");

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
