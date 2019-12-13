import * as Sequelize from "sequelize";

const User = (sequelize: Sequelize.Sequelize) => {
  const _def = sequelize.define("users", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: Sequelize.DataTypes.STRING,
      field: "first_name"
    },
    lastName: {
      type: Sequelize.DataTypes.STRING,
      field: "last_name"
    },
    email: Sequelize.DataTypes.STRING
  },
  {
    freezeTableName: true,
    timestamps: false
  });

  // @ts-ignore
  _def.associate = (models: any) => {
    // @ts-ignore
    _def.hasMany(models.Thread, { targetKey: "userId", as: "threads"});
    // @ts-ignore
    _def.hasMany(models.Post, { targetKey: "userId", as: "posts" });
  };
  
  return _def;
}

export {User};