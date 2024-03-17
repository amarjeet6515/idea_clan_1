const { gql } = require('apollo-server-express');

const postType = gql`
  type Post {
    id: ID!
    user: ID!
    content: String!
  }

  type Query {
    getUserPosts: [Post]
  }

  type Mutation {
    createPost(content: String!): Post
  }
`;

module.exports = { postType };