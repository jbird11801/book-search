const typeDefs = `

  type user {

    _id : ID!

    username: String!

    email: String!

    password: String!

    bookCount:String

    savedBooks: [book]
    
  }

  type auth {

    token : String

    user : user
    
  }

  type book {

    authors : [String]

    description : String!

    bookId : ID!

    image : String

    link : String

    title : String!

  }


  type Query {
    
    me (userId : ID!): user

  }



  type Mutation {

    addBook(user : String! , bookInput : String!) : user

    removeBook(username : String , bookId : ID!) : user

    addUser(username : String! , email : String! , password : String!) : auth

    login(email: String!, password: String!): auth

  }

`;

module.exports = typeDefs;

