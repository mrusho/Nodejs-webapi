import * as Sequelize from "sequelize";

const Thread = (sequelize: Sequelize.Sequelize) => {
  const _def = sequelize.define("discussion_threads", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    subject: Sequelize.DataTypes.STRING,
    userId: {
      type: Sequelize.DataTypes.INTEGER,
      field: "author_id"
    },
    content: Sequelize.DataTypes.STRING,
    replies: Sequelize.DataTypes.INTEGER,
    abuseStatus: {
      type: Sequelize.DataTypes.INTEGER,
      field: "abuse_status"
    },
    dateCreated: {
      type: Sequelize.DataTypes.STRING,
      field: "date_created"
    },
    dateEdited: {
      type: Sequelize.DataTypes.STRING,
      field: "date_edited"
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  });

  // @ts-ignore
  _def.associate = (models: any) => {
    // @ts-ignore
    _def.hasMany(models.Post, { targetKey: "discussionThreadId", as : "posts" });
    // @ts-ignore
    _def.belongsTo(models.User, { foreignKey: "userId", as: "user"})
  };
  
  return _def;
}

const Post = (sequelize: Sequelize.Sequelize) => {
  const _def = sequelize.define("discussion_posts", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: Sequelize.DataTypes.INTEGER,
      field: "author_id"
    },
    discussionThreadId: {
      type: Sequelize.DataTypes.INTEGER,
      field: "thread_id"
    },
    content: Sequelize.DataTypes.STRING,
    abuseStatus: {
      type: Sequelize.DataTypes.INTEGER,
      field: "abuse_status"
    },
    dateCreated: {
      type: Sequelize.DataTypes.STRING,
      field: "date_created"
    },
    dateEdited: {
      type: Sequelize.DataTypes.STRING,
      field: "date_edited"
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  });

  // @ts-ignore
  _def.associate = (models: any) => {
    // @ts-ignore
    _def.belongsTo(models.Thread, { foreignKey: "discussionThreadId", as: "thread" });
    // @ts-ignore
    _def.belongsTo(models.User, { foreignKey: "userId", as: "user"})
  };
  
  return _def;
}

export {Thread, Post};