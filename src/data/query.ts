import db from "../models/index";

const GetThreads = async () => {
  // @ts-ignore
  return await db.Thread.findAll(
  { 
    include: [
      {
        model: db.Post, 
        as: "posts",
        include: {
          model: db.User,
          as: "user"
        }
      },
      {
        model: db.User,
        as: "user"
      }
    ]
  });
}

const GetThread = async (arg: { id: number; }) => {
  // @ts-ignore
  return await db.Thread.findOne(
  {
    where: {
      id: arg.id
    },
    include: [
      {
        model: db.Post, 
        as: "posts",
        include: {
          model: db.User,
          as: "user"
        }
      },
      {
        model: db.User,
        as: "user"
      }
    ]
  });
}

const GetPosts = async () => {
  // @ts-ignore
  return await db.Post.findAll(
  { 
    include: [
      {
        model: db.Thread, 
        as: "thread",
        include: {
          model: db.User,
          as: "user"
        }
      },
      {
        model: db.User,
        as: "user"
      }
    ]
  });
}

const GetPost = async (arg: { id: number; }) => {
  // @ts-ignore
  return await db.Post.findOne(
  {
    where: {
      id: arg.id
    },
    include: [
      {
        model: db.Thread, 
        as: "thread",
        include: {
          model: db.User,
          as: "user"
        }
      },
      {
        model: db.User,
        as: "user"
      }
    ]
  });
}

export {GetThreads, GetThread, GetPosts, GetPost}