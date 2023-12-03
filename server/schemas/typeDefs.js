const typeDefs = `

  type user {

    username: String!

    Email: String!

    password: String!

    savedBooks: [book]
  }

  type book {

    authors : []!

    description : String!

    _id : string!

    image : string

    link : String

    title : String!

  }


  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }

`;

module.exports = typeDefs;

