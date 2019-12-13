const AppSchema = `
  type Thread {
    id: ID,
    subject: String,
    content: String,
    user: User,
    replies: Int,
    abuseStatus: Int,
    posts: [Post],
    dateCreated: String,
    dateEdited: String
  }

  type Post {
    id: ID,
    content: String,
    user: User,
    abuseStatus: Int,
    dateCreated: String,
    dateEdited: String,
    thread: Thread
  }

  type User {
    id: ID,
    firstName: String,
    lastName: String,
    email: String
  }

  type Query {
    threads: [Thread],
    thread(id: ID): Thread,
    posts: [Post],
    post(id: ID): Post
  }
`;

export default AppSchema;