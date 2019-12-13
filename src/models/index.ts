import { Sequelize } from "sequelize";
import {User} from "./users";
import {Thread, Post} from "./discussions";

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

let sequelize: Sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const db = {
  sequelize, 
  Sequelize,
  Thread: Thread(sequelize),
  Post: Post(sequelize),
  User: User(sequelize)
};

Object.values(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db);
  }
});


export default db;
