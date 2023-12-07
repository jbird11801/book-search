const typeDefs = `

  type user {

    _id : ID!

    username: String!

    email: String!

    password: String!

    savedBooks: [book]
    
  }

  type auth {

    token : String

    user : user
    
  }

  type book {

    authors : [String]!

    description : String

    bookId : ID!

    image : String

    link : String

    title : String!

  }


  type Query {
    
    user (username : String) : user

  }

  input bookInput {

    authors : [String]! 
    description : String
    bookId : ID! 
    image : String 
    title : String!

  }

  type Mutation {

    addBook( bookinput : bookInput!) : user

    removeBook(_id : ID!) : user

    addUser(username : String! , email : String! , password : String!) : auth

    login(email: String!, password: String!): auth

  }

`;

module.exports = typeDefs;

